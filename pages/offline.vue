<template>
	<div>
		<Head>
			<Title>Find Fire Digital Offline Services</Title>
			<Meta
				lang="en"
				name="description"
				content="Our Offline Services include Editorial, Sound Mixing, Foley, ADR, and Music."
				keywords="video, production, post, creative, offline, online, color, vfx, sound, music, design, motion, animation, storyboard, animatic, editorial, sound mixing, foley, adr, music, color grade, vfx, mastering, delivery"
			/>
			<meta charset="utf-8" />
		</Head>
		<main class="main-content">
			<PageHeading
				imgSrc="/imgs/offline"
				altText="animation of man in edit suite"
				title="Offline"
				subtitle="“Fix it in post” that doesn’t bother us."
				color="yellow"
			/>

			<SectionDescription
				color="orange"
				imgSrc="/imgs/offline-editorial"
				altText="screenshot of a timeline in an editing software image shows men on camels in front of a truck"
				title="Editorial"
				text="A team of editors to organize, cut , manage , and assemble the pieces of each project to bring to life every vision."
			/>
			<SectionDescription
				color="yellow"
				imgSrc="/imgs/offline-sound"
				altText="A man and woman singing in a recording booth"
				title="Sound Mixing, Foley, ADR"
				text="Providing finish audio sweetening, advanced dialogue replacement services, and full foley service, allow us to help clean up, record, and create your audio tracks, with a full support of tools and resources to build the entire projects soundtracks."
			/>
			<SectionDescription
				color="red"
				imgSrc="/imgs/offline-music"
				altText="Man infront of a sound panel"
				title="Music"
				text="From custom composing from award winning composers and live instrument recording, or simple digital  track creation our team has the background and talents to immerse your projects with the perfect music to tell your story and set your mood."
			/>

			<NuxtLink to="/#services-online">
				<button class="background-white wide">
					<Icon
						class="icon"
						name="octicon:arrow-left-16"
					/>Other Services
				</button>
			</NuxtLink>
			<SectionContact />
		</main>
	</div>
</template>
<script>
definePageMeta({
	pageTransition: {
		name: 'page',
		mode: 'out-in',
		// default
	},
});
</script>

<style scoped>
button {
	display: flex;
	align-items: center;
	justify-content: center;
}
.icon {
	width: 2.5rem;
	height: 2.5rem;
}
.page-enter-active {
	transition: all 0.1s linear;
}
.page-leave-active {
	transition: all 0.1s linear;
}

.page-leave-to {
	transform: translateX(100%);
}

.page-enter-from {
	transform: translateX(100%);
}

.page-leave-from,
.page-enter-to {
	transform: translateX(0);
}
@media (min-width: 550px) {
	.icon {
		width: 4rem;
		height: 4rem;
	}
}

@media (min-width: 1090px) {
}
</style>
