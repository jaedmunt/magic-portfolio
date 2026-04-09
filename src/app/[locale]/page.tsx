import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, SmartImage, IconButton } from '@/once-ui/components';
import { TechLinkProvider } from '@/components/TechLinkContext';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import GitHubCalendar from 'react-github-calendar';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter, social } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="m"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="m" gap="m">
					<Flex
						direction="column"
						fillWidth gap="m"
						style={{ maxWidth: '100%' }}>
						<Flex direction="column" gap="4">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								Software Engineer
							</Heading>
							<Text
								variant="display-default-s"
								onBackground="neutral-weak">
								Agentic AI, Search &amp; Data Infrastructure
							</Text>
						</Flex>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							{home.subline}
						</Text>
						<Flex
							gap="8"
							alignItems="center">
							<Button
								data-border="conservative"
								href={`/${locale}/about`}
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
										)}
										{t("about.title")}
								</Flex>
							</Button>
							{(() => {
								const linkedIn = social.find(item => item.icon === 'linkedin' && item.link);
								return linkedIn && (
									<IconButton
										href={linkedIn.link}
										icon="linkedin"
										tooltip="LinkedIn"
										size="m"
										variant="ghost"/>
								);
							})()}
							{(() => {
								const github = social.find(item => item.icon === 'github' && item.link);
								return github && (
									<IconButton
										href={github.link}
										icon="github"
										tooltip="GitHub"
										size="m"
										variant="ghost"/>
								);
							})()}
						</Flex>
						{('display' in about.technical ? about.technical.display : true) && (
						<TechLinkProvider>
						<Flex fillWidth direction="column" paddingY="4" gap="s">
							<Flex
								direction="row"
								wrap={true}
								fillWidth gap="s">
								{about.technical.skills
									.filter(skill => skill.title !== "Certifications")
									.filter(skill => skill.title !== "Languages (Spoken)")
									.map((skill, index) => (
									<Flex
										key={`${skill}-${index}`}
										direction="column"
										gap="4"
										style={{ maxWidth: '100%', flex: '1 1 auto' }}>
										<Text
											variant="label-default-xs"
											onBackground="neutral-weak"
											style={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
											{skill.title}
										</Text>
										<Text
											variant="body-default-s"
											onBackground="neutral-weak"
											wrap="pretty"
											style={{ wordBreak: "break-word" }}>
											{skill.description}
										</Text>
									</Flex>
								))}
							</Flex>
						</Flex>
						</TechLinkProvider>
					)}
						
					</Flex>
					
				
			</Flex>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="s"
				overflowX="hidden">
				<GitHubCalendar 
					username="jaedmunt">
				</GitHubCalendar>
			</Flex>
			<Projects range={[1,1]} locale={locale}/>
			
			
			
			{routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1,2]} columns="2" locale={locale}/>
				</Flex>
			)}
			<Projects range={[2]} locale={locale}/>
			{ newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
