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
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const matrixIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const messageIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef('Jub vf areq favcvat abj. RKN');
  const messageIndexRef = useRef(0);
  const messagePositionsRef = useRef<{row: number, col: number}[]>([]);
  const [cipher, setCipher] = useState('');

  const generateCipher = () => {
    const cipherText = ``;
    setCipher(cipherText);
    return cipherText;
  };

  const matrixRain = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const rain = Array(30).fill('').map(() => 
      Array(100).fill('').map(() => ({
        char: chars[Math.floor(Math.random() * chars.length)],
        color: '#00ff00'
      }))
    );

    // Add number digit if it's time
    if (messageIndexRef.current < messageRef.current.length) {
      // Position digits in a horizontal line starting from the middle
      const row = 15; // Middle row
      const startCol = 40; // Start from middle
      const col = startCol + messageIndexRef.current;
      
      messagePositionsRef.current.push({ row, col });
      
      // Add all current digits to their positions
      messagePositionsRef.current.forEach((pos, index) => {
        if (index <= messageIndexRef.current) {
          rain[pos.row][pos.col] = {
            char: messageRef.current[index],
            color: '#ff00ff'
          };
        }
      });
      
      messageIndexRef.current++;
    } else {
      // Keep existing digits in place
      messagePositionsRef.current.forEach((pos, index) => {
        rain[pos.row][pos.col] = {
          char: messageRef.current[index],
          color: '#ff00ff'
        };
      });
    }

    return rain.map(row => 
      row.map(cell => `<span style="color: ${cell.color}">${cell.char}</span>`).join('')
    ).join('\n');
  };

  const startMatrix = () => {
    if (matrixIntervalRef.current) return;
    setIsMatrixActive(true);
    messageIndexRef.current = 0;
    messagePositionsRef.current = [];
    
    // Display cipher in terminal
    const cipherText = generateCipher();
    setCommands(prev => [...prev, { command: 'matrix', output: cipherText }]);
    
    matrixIntervalRef.current = setInterval(() => {
      const matrixElement = document.getElementById('matrix-overlay');
      if (matrixElement) {
        matrixElement.innerHTML = matrixRain();
      }
    }, 100);

    // Reset digits every 30 seconds
    messageIntervalRef.current = setInterval(() => {
      messageIndexRef.current = 0;
      messagePositionsRef.current = [];
    }, 30000);
  };

  const stopMatrix = () => {
    if (matrixIntervalRef.current) {
      clearInterval(matrixIntervalRef.current);
      matrixIntervalRef.current = null;
    }
    if (messageIntervalRef.current) {
      clearInterval(messageIntervalRef.current);
      messageIntervalRef.current = null;
    }
    setIsMatrixActive(false);
  };

  const asciiArt = `
 ---------------------------------------------------                                                                            
███████╗████████╗ █████╗  ██████╗██╗  ██╗                                                                          
██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝                                                                          
███████╗   ██║   ███████║██║     █████╔╝                                                                           
╚════██║   ██║   ██╔══██║██║     ██╔═██╗                                                                           
███████║   ██║   ██║  ██║╚██████╗██║  ██╗                                                                          
╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝ 
██╗      █████╗ ██████╗ 
██║     ██╔══██╗██╔══██╗
██║     ███████║██████╔╝
██║     ██╔══██║██╔══██╗
███████╗██║  ██║██████╔╝
╚══════╝╚═╝  ╚═╝╚═════╝ 
 ---------------------------------------------------                                                                          
                                                                                                                                  
██╗      ██████╗  ██████╗ ██╗  ██╗                                              
██║     ██╔═══██╗██╔═══██╗██║ ██╔╝                                            
██║     ██║   ██║██║   ██║█████╔╝                                              
██║     ██║   ██║██║   ██║██╔═██╗                                               
███████╗╚██████╔╝╚██████╔╝██║  ██╗                                              
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ 
██╗   ██╗██████╗
██║   ██║██╔══██╗ 
██║   ██║██████╔╝
██║   ██║██╔═══╝
╚██████╔╝██║    
 ╚═════╝ ╚═╝ 
██████╗ ██████╗ ██╗   ██╗██╗   ██╗
██╔══██╗██╔══██╗██║   ██║██║   ██║
██████╔╝██████╔╝██║   ██║██║   ██║
██╔══██╗██╔══██╗██║   ██║╚██╗ ██╔╝
██████╔╝██║  ██║╚██████╔╝ ╚████╔╝ 
╚═════╝ ╚═╝  ╚═╝ ╚═════╝   ╚═══╝                                                  
 ---------------------------------------------------                                                                
 ██████╗███████╗███╗   ██╗████████╗  
██╔════╝██╔════╝████╗  ██║╚══██╔══╝  
██║     █████╗  ██╔██╗ ██║   ██║     
██║     ██╔══╝  ██║╚██╗██║   ██║     
╚██████╗███████╗██║ ╚████║   ██║ 

██╗   ██╗██████╗ ██╗   ██╗
██║   ██║██╔══██╗╚██╗ ██╔╝
██║   ██║██████╔╝ ╚████╔╝ 
██║   ██║██╔══██╗  ╚██╔╝  
╚██████╔╝██║  ██║   ██║   
                                                                   
██████╗ ██╗ █████╗ 
██╔══██╗██║██╔══██╗
██║  ██║██║███████║
██║  ██║██║██╔══██║
██████╔╝██║██║  ██║
  
███╗   ███╗ ██████╗ ███╗   ██╗██████╗ ███████╗
████╗ ████║██╔═══██╗████╗  ██║██╔══██╗██╔════╝
██╔████╔██║██║   ██║██╔██╗ ██║██║  ██║███████╗
██║╚██╔╝██║██║   ██║██║╚██╗██║██║  ██║╚════██║
██║ ╚═╝ ██║╚██████╔╝██║ ╚████║██████╔╝███████║    
  `;


  // - contact: Send me a message
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
- matrix: Toggle matrix rain effect
- theme [color]: Change terminal theme (colors: green, blue, purple, red)
- ascii: Show cool ASCII art
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
      case 'matrix':
        if (isMatrixActive) {
          stopMatrix();
          output = 'Matrix rain effect stopped';
        } else {
          startMatrix();
          output = 'Matrix rain effect started';
        }
        break;
      case 'ascii':
        output = asciiArt;
        break;
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
        stopMatrix();
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
        stopMatrix();
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

      {isMatrixActive && (
        <div id="matrix-overlay" className={styles.matrixOverlay} />
      )}

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