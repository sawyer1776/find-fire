<template>
	<section>
		<video muted loop playsinline autoplay>
			<!-- <source
				:srcset="`${imgSrc}-920w.webm 920w, ${imgSrc}-425w.webm 425w,`"
				:src="`${imgSrc}-920w.webm`"
				type="video/webm"
			/> -->
			<source :src="`${imgSrc}-max.mp4`" type="video/mp4" />

			<p>Your browser doesn't support HTML video.</p>
		</video>

		<h1 :class="color" class="section-title">
			{{ title }}
		</h1>
		<aside>
			<h2>{{ subtitle }}</h2>
			<ul>
				<li v-for="item in items" :key="item[0]">
					<div class="icon">
						<Icon class="icon" :name="item[1]" />
					</div>
					<h3>{{ item[0] }}</h3>
				</li>
			</ul>
			<NuxtLink :to="destination">
				<button>
					{{ title }}
					<Icon
						class="arrow"
						name="octicon:arrow-right-16"
					/>
				</button>
			</NuxtLink>
		</aside>
		<p>{{ text }}</p>
	</section>
</template>

<script>
export default {
	props: [
		'text',
		'title',
		'subtitle',
		'items',
		'color',
		'imgSrc',
		'destination',
	],
	methods: {
		playVideo() {
			console.log(
				'playing video',
				this.$el.querySelector('video')
			);
			this.$el.querySelector('video').play();
		},
	},

	// mounted() {
	// 	this.playVideo();
	// },
};
</script>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0rem;
	margin-bottom: 2rem;
}
h1 {
	margin: 2rem 1.5rem;
	align-self: flex-start;
}
video {
	width: 100vw;
	/* margin: 0 auto; */
}

aside {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2rem;
	width: 100%;
	padding: 0rem 1.5rem;
	color: var(--offwhite);
}

h2 {
	font-size: 1.75rem;
	font-weight: 600;
	line-height: 1.5;
}

button {
	display: flex;
	align-items: center;
}
.icon {
	width: 4.25rem;
	height: 4.25rem;
	color: var(--offwhite);
}
.arrow {
	width: 2.5rem;
	height: 2.5rem;
	color: var(--offwhite);
}

h3 {
	font-size: 1.75rem;
	font-weight: 600;
	line-height: 1.5;
}
li {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
}
ul {
	margin-left: 1.5rem;
}
a {
	align-self: flex-end;
}

@media (min-width: 550px) {
	h1 {
		margin: 2rem 6rem;
	}
	aside {
		width: 100%;
		padding: 0rem 6rem;
	}
	section {
		max-width: 92rem;
	}
	h2 {
		font-size: 2.75rem;
	}
	ul {
		margin-left: 0rem;
	}
	.icon {
		width: 8rem;
		height: 8rem;
	}
	h3 {
		font-size: 2.75rem;
	}
	.arrow {
		width: 4rem;
		height: 4rem;
	}
}
@media (min-width: 1090px) {
	section {
		width: 100%;
	}
	video {
		width: 100%;
		border-radius: 9px;
	}
	h1 {
		margin: 2rem 8rem;
	}
	aside {
		width: 100%;
		padding: 0rem 8rem;
	}

	h2 {
		font-size: 2.2rem;
	}
	.icon {
		width: 6rem;
		height: 6rem;
	}
	h3 {
		font-size: 2.2rem;
	}
	.arrow {
		width: 4rem;
		height: 4rem;
	}

	ul {
		display: flex;
		width: 100%;
		justify-content: space-between;

		gap: 3rem;
		margin-left: 0rem;
	}
	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		box-shadow: 2px 2px 0px 3px var(--dark-brown);

		gap: 3rem;
		margin-bottom: 3rem;
		padding: 1.5rem;
		width: 22rem;
		height: 22rem;
		border-radius: 9px;
	}
}
</style>
