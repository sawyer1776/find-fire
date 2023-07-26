<template>
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
