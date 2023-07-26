<script></script>

<template>
	<main>
		<PageHeading
			imgSrc="../public/imgs/online-gif.webp"
			altText="animation of man in edit suite"
			title="Online"
			subtitle="We provide that  perfect finishing touch."
			color="red"
		/>

		<ColorGradeImg
			img1="../public/imgs/online-color3.jpeg"
			img2="../public/imgs/online-color4.jpeg"
		/>

		<SectionDescription
			color="yellow"
			title="Color Grade"
			text="With full cinematic color correction services your project will have the highest quality look and feel specifically customized to the needs of your look and delivery."
		/>
		<SectionDescription
			color="orange"
			imgSrc="../public/imgs/online-vfx.png"
			altText="cut out image of an explosion"
			title="VFX"
			text="Flame, After Effects, Maya, 3D motion capture and more! Require visual  effects for your project? Allow us to service those needs for you.  Who doesn’t like a fun explosion?"
		/>
		<SectionDescription
			color="red"
			imgSrc="../public/imgs/online-mastering.jpeg"
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
main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	width: 100vw;
	padding: 0 1.5rem;
	overflow-x: hidden;
}
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
</style>
