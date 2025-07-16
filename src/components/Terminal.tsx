'use client';

import { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaTimes, FaSpinner } from 'react-icons/fa';
import styles from './Terminal.module.scss';

interface Command {
  command: string;
  output: string;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState<Command[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('default');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let output = '';

    switch (cmd.split(' ')[0]) {
      case 'help':
        output = `Available commands:
- help: Show this help message
- cv: Download my CV
- contact: Send me a message
- clear: Clear the terminal
- theme [color]: Change terminal theme (colors: green, blue, purple, red)
- links: Open all my social and project links
- exit: Close the terminal`;
        break;
      case 'cv':
        output = 'Downloading CV...';
        window.open('https://jaedmuntonwebsite.s3.us-east-1.amazonaws.com/Jaedon+Munton+CV.pdf', '_blank');
        break;
      case 'contact':
        output = 'Opening contact form...';
        // Implement contact form logic
        break;
      case 'clear':
        setCommands([]);
        return;
      case 'theme':
        const color = command.split(' ')[1];
        if (['green', 'blue', 'purple', 'red'].includes(color)) {
          setTheme(color);
          output = `Theme changed to ${color}`;
        } else {
          output = 'Invalid theme. Available themes: green, blue, purple, red';
        }
        break;
      case 'links':
        const urls = [
          'https://chiphub.com',
          'https://stacklab.finance',
          'https://lookupbruv.co.uk',
          'https://github.com/jaedmunt',
          'https://linkedin.com/in/jaedonmunton'
        ];
        urls.forEach(url => window.open(url, '_blank'));
        output = 'Opening all links in new tabs...';
        break;
      case 'exit':
        setIsOpen(false);
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setCommands([...commands, { command, output }]);
    setInput('');
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        handleCommand('help');
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <>
      <button
        className={styles.floatingButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open terminal"
      >
        <FaTerminal />
      </button>

      {isOpen && (
        <div className={`${styles.terminal} ${styles[theme]}`} ref={terminalRef}>
          <div className={styles.header}>
            <span>Terminal</span>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className={styles.content}>
            {isLoading ? (
              <div className={styles.loading}>
                <FaSpinner className={styles.spinner} />
                <span>Initializing terminal...</span>
              </div>
            ) : (
              <>
                {commands.map((cmd, index) => (
                  <div key={index} className={styles.command}>
                    <span className={styles.prompt}>$</span>
                    <span className={styles.input}>{cmd.command}</span>
                    <div className={styles.output}>{cmd.output}</div>
                  </div>
                ))}
                <div className={styles.inputLine}>
                  <span className={styles.prompt}>$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a command..."
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal; 