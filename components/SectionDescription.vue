<template>
	<article>
		<img
			v-if="imgSrc"
			:src="imgSrc"
			:alt="altText"
			class="section-img"
		/>

		<div>
			<h2 :class="color" class="section-title">
				{{ title }}
			</h2>
			<p>
				{{ text }}
			</p>
		</div>
	</article>
</template>

<script>
export default {
	props: ['color', 'title', 'text', 'altText', 'imgSrc'],
};
</script>

<style scoped>
article {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin-bottom: 3rem;
}
img {
	width: 100%;

	border-radius: 9px;
	border: 2px solid var(--dark-brown);
}
h2 {
	margin-bottom: 1rem;
}
p {
	color: var(--offwhite);
}
</style>
