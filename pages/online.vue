<script></script>

<template>
	<div>
		<Head>
			<Title>Find Fire Digital Online Services</Title>
			<Meta
				lang="en"
				name="description"
				content="Our Online Services include Color Grade, VFX, Mastering, and Delivery."
				keywords="video, production, post, creative, offline, online, color, vfx, sound, music, design, motion, animation, storyboard, animatic, editorial, sound mixing, foley, adr, music, color grade, vfx, mastering, delivery"
			/>
			<meta charset="utf-8" />
		</Head>
		<main class="main-content">
			<PageHeading
				imgSrc="/imgs/online"
				altText="animation of man in edit suite"
				title="Online"
				subtitle="We provide that  perfect finishing touch."
				color="red"
			/>

			<SectionDescription
				color="yellow"
				title="Color Grade"
				text="With full cinematic color correction services your project will have the highest quality look and feel specifically customized to the needs of your look and delivery."
			/>
			<ColorGradeImg
				img1="/imgs/online-color3.webp"
				img2="/imgs/online-color4.webp"
			/>
			<SectionDescription
				color="orange"
				imgSrc="/imgs/online-vfx"
				altText="cut out image of an explosion"
				title="VFX"
				text="Flame, After Effects, Maya, 3D motion capture and more! Require visual  effects for your project? Allow us to service those needs for you.  Who doesn’t like a fun explosion?"
			/>
			<SectionDescription
				color="red"
				imgSrc="/imgs/online-mastering"
				altText="NEED NEW IMG"
				title="Mastering & Delivery"
				text="You’ve crossed the finish line of your project but need those last few mastering and export layout passes in order to get your project delivered. Allow our team to organize that work load for you, organize  the deliverables, and ensure all deadlines and needs are met. 
"
			/>

			<NuxtLink to="/#services">
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
