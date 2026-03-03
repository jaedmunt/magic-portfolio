import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, SmartImage, IconButton } from '@/once-ui/components';
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
						<Heading
							wrap="balance"
							variant="display-strong-l">
							{home.headline}
						</Heading>
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
						</Flex>
						{('display' in about.technical ? about.technical.display : true) && (
						<Flex fillWidth direction="column" paddingY="xs" gap="m">
							<Flex
								direction="row"
								wrap={true}  // Changed to true to enable wrapping on mobile
								fillWidth gap="xl">
								{about.technical.skills
									.filter(skill => skill.title !== "Certifications")
									.filter(skill => skill.title !== "Languages")
									.map((skill, index) => (
									<Flex
										key={`${skill}-${index}`}
										direction="column"
										paddingRight="xs"
										paddingBottom="xs"
										gap="0"
										style={{ maxWidth: '100%', flex: '1 1 auto' }}>
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
					)}
						
					</Flex>
					
				
			</Flex>
			{/* GitHub Calendar - commented out for cleaner resume-like design */}
			{/* <Flex
				fillWidth
				direction="column"
				paddingY="l" gap="s"
				overflowX="hidden">
				<GitHubCalendar 
					username="jaedmunt">
				</GitHubCalendar>
			</Flex> */}
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
