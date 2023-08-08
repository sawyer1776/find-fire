<template>
	<video muted autoplay loop>
		<source
			src="https://downloads.blackmagicdesign.com/videos/products/davinciresolve/landing/hero/20230406-rohsri/hero.hd.1080p.mp4"
			type="video/mp4"
		/>
		<source
			src="https://downloads.blackmagicdesign.com/videos/products/davinciresolve/landing/hero/20230406-rohsri/hero.hd.720p.mp4"
			type="video/mp4"
		/>
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
