<template>
	<video muted loop autoplay preload="auto" playsinline>
		<source src="/imgs/motivator.webm" type="video/webm" />
	</video>
</template>

<style scoped>
video {
	width: 100%;
}
@media (min-width: 1090px) {
	video {
		width: calc(100% + 3rem);
	}
}
</style>
