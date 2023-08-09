<template>
	<article>
		<div class="text-copy">
			<h2 :class="color" class="section-title">
				{{ title }}
			</h2>
		</div>
		<p>
			{{ text }}
		</p>

		<img
			v-if="imgSrc"
			:src="imgSrc"
			:alt="altText"
			class="section-img"
		/>
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
	align-items: flex-start;
	gap: 2rem;
	margin-bottom: 0rem;
	padding-bottom: 5rem;
	/* border-bottom: 2px solid var(--grey); */
}
img {
	width: 100%;
	border-radius: 9px;
}
h2 {
	margin-bottom: 1rem;
}
p {
	color: var(--offwhite);
}

@media (min-width: 550px) {
	article {
		margin-bottom: 2rem;
	}
	img {
		border-radius: 12px;
	}
	p {
		font-size: 3.25rem;
	}
}

@media (min-width: 1090px) {
	h2 {
		align-self: flex-end;
	}
	article {
		padding: 3rem 10rem;
	}
	/* .text-copy {
		display: flex;
		gap: 3rem;
	}
	.title-container {
		width: 40%;
	}
	p {
		width: 60%;
	} */
}
</style>
