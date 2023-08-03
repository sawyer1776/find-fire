<template>
	<title>Find Fire Digital</title>
	<meta
		name="description"
		content="Find Fire Digital is a full service creative & post-house for
			narrative, commercial, and digital content. We
			customize to fit your project needs and strive to
			deliver beyond expectations."
	/>
	<Header />
	<NuxtPage />
	<Footer />
</template>

<style>
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
</style>
