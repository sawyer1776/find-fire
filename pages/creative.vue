<template>
	<main>
		<PageHeading
			imgSrc="/imgs/creative-gif.webp"
			altText="animation of man drawing at a desk"
			subtitle="Do you have an idea? Let us help realize it."
			title="Creative"
			color="orange"
		/>

		<SectionDescription
			color="red"
			imgSrc="/imgs/creative-design.png"
			altText="Concept art of a man with a sword and shield standing with his cape blowing in the wind."
			text="Have a project that still requires the creative to be completed? Whether it be an overall creative director or the design of individual elements, our team can jump into the workflow of your project and bring that missing piece you need to ensure your project has perfectly unique and captivating design elements."
			title="Design"
		/>
		<SectionDescription
			color="orange"
			imgSrc="/imgs/creative-motion.png"
			altText="Animation of a whale made of stars"
			text="From motion graphics to  2D and 3D animation our team can create, from concept to final delivery, the  motion design elements for any type of  project."
			title="Motion Design"
		/>
		<SectionDescription
			color="yellow"
			imgSrc="/imgs/creative-storyboarding.png"
			altText="photo of a man drawing a storyboard"
			text="Creative has the vision but needs to be storyboarded? You’ve come to the right place! With storyboard and animatic services your project will be production ready having each step visualized. 
"
			title="Storyboarding & Animatic"
		/>
		<NuxtLink to="/#services-offline">
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
	margin: 0 auto;
	gap: 4rem;
	width: 100vw;
	max-width: 85rem;
	padding: 0 1.5rem;
	overflow-x: visable;
	background-color: var(--dark-brown);
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
@media (min-width: 550px) {
	.icon {
		width: 4rem;
		height: 4rem;
	}
}

@media (min-width: 1090px) {
	main {
		background-color: var(--dark-brown);
		width: 75vw;
		max-width: 190rem;
		padding: 0 7.5rem;
	}
}
</style>
