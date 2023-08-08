<template style="scroll-behavior: smooth">
	<div>
		<Head>
			<Title>Find Fire Digital</Title>
			<Meta
				lang="en"
				name="description"
				content="Find Fire digital is a full service creative & post-house for
		narrative, commercial, and digital content. We
		customize to fit your project needs and strive to
		deliver beyond expectations."
				keywords="video, production, post, creative, offline, online, color, vfx, sound, music, design, motion, animation, storyboard, animatic, editorial, sound mixing, foley, adr, music, color grade, vfx, mastering, delivery"
			/>
		</Head>
		<main
			class="main-content"
			style="scroll-behavior: smooth"
		>
			<SectionHero />

			<SectionServices />
			<div id="services"></div>

			<LazySectionType
				imgSrc="/imgs/creative"
				title="Creative"
				subtitle="Do you have an idea? Let us help realize it."
				color="orange"
				:items="[
					['Design', 'ic:round-draw'],
					['Motion Design', 'mdi:motion'],
					['Storyboarding and Animatics', 'bxs:dock-right'],
				]"
				destination="/creative"
			/>
			<div id="services-offline"></div>
			<LazySectionType
				imgSrc="/imgs/offline"
				title="Offline"
				subtitle="“Fix it in post” that doesn’t bother us."
				color="yellow"
				:items="[
					['Editorial', 'icomoon-free:film'],
					[
						'Sound Mixing, Foley, ADR',
						'fluent:mic-pulse-48-filled',
					],
					['Music', 'game-icons:piano-keys'],
				]"
				destination="/offline"
			/>
			<div id="services-online"></div>
			<LazySectionType
				class="contact"
				imgSrc="/imgs/online"
				title="Online"
				subtitle="We Provide the finishing touch"
				color="red"
				:items="[
					['Color Grade', 'icon-park-solid:color-filter'],
					['VFX', 'fa6-solid:explosion'],
					['Mastering & Delivery', 'fontisto:film'],
				]"
				destination="/online"
			/>
			<SectionContact />
		</main>
	</div>
</template>
<script>
definePageMeta({
	pageTransition: {
		name: 'page',
		mode: 'out-in',
	},
});
</script>

<style>
:root {
	--brand-brown: #362420;
	--dark-brown: #19100f;
	--brand-orange: #ff7300;
	--brand-yellow: #ffff01;
	--brand-red: #fe0000;
	--offwhite: #fef4eb;
	--grey: #816a6a;
	--light-grey: #bcb5b0;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}

body {
	background-color: var(--dark-brown);
	font-family: 'Open Sans', sans-serif;
	overflow-x: hidden;
	line-height: 1;
	font-weight: 400;
	/* position: relative; */
}

.details div.row{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

a {
	text-decoration: none;
}

a:link,
a:visited,
a:hover,
a:active {
	color: inherit;
}

ul {
	list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 700;
}
p {
	font-weight: 300;
	font-size: 1.8rem;
	line-height: 1.65;
	letter-spacing: 0.085rem;
}

button {
	font-weight: 800;
	background-color: var(--brand-orange);
	color: var(--offwhite);
	padding: 0.75rem 1.5rem;
	font-size: 1.75rem;
	text-transform: uppercase;
	border-radius: 9px;
	font-family: 'Open Sans', sans-serif;
	letter-spacing: 0.05rem;
	border: 2px solid black;
	box-shadow: 0.6rem 0.5rem 0 black;
	transition: all 20ms;
	cursor: pointer;
	text-shadow: 1px 1px 0 black;
}
button:hover {
	transform: translate(-0.1rem, -0.1rem);
	box-shadow: 0.7rem 0.6rem 0 black;
}

button:active {
	transform: translate(0.6rem, 0.5rem);
	box-shadow: 0 0 0 black;
}

.section-title {
	font-size: 2.75rem;
	line-height: 1.25;
	padding: 0.75rem 1rem;
	/* background-color: var(--dark-brown); */
	width: fit-content;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
}

.heading {
	font-size: 2.3rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
}
.wide {
	width: 100%;
}
.narrow {
	width: fit-content;
}
.background-white {
	background-color: var(--offwhite);
	color: var(--dark-brown);
	text-shadow: none;
}
.background-yellow {
	background-color: var(--brand-yellow);
	color: var(--dark-brown);
	text-shadow: none;
}

.main-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	width: 100vw;
	padding: 1.5rem;
	background-color: var(--dark-brown);
}

#services {
	height: 8rem;
	margin-top: -8rem;
}
#services-online {
	height: 8rem;
	margin-top: -8rem;
}
#services-offline {
	height: 8rem;
	margin-top: -8rem;
}
.red {
	color: var(--brand-red);
}
.yellow {
	color: var(--brand-yellow);
}
.orange {
	color: var(--brand-orange);
}

/* Page Transitions */
.page-enter-active {
	transition: all 0.1s linear;
}
.page-leave-active {
	transition: all 0.1s linear;
}

.page-leave-to {
	transform: translateX(-100%);
}

.page-enter-from {
	transform: translateX(-100%);
}

.page-leave-from,
.page-enter-to {
	transform: translateX(0);
}

@media (min-width: 550px) {
	p {
		font-size: 2.4rem;
	}
	.section-title {
		font-size: 4rem;

		padding: 1rem 2rem;
	}

	.heading {
		font-size: 4rem;
	}
	button {
		padding: 0.85rem 1.7rem;
		font-size: 2.5rem;
		border-radius: 12px;
		letter-spacing: 0.1rem;
		border: 3px solid black;
		text-shadow: 2px 2px 0 black;
	}
}

@media (min-width: 1090px) {
	.main-content {
		width: 75vw;
		max-width: 125rem;
		margin: 0 auto;
	}
	body {
		background-color: var(--brand-brown);
	}
}
</style>
