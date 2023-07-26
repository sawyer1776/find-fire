<template>
	<div class="imageSplit" draggable="false">
		<img
			draggable="false"
			@click="togglePaused"
			class="image starting-img"
			:src="img1"
			alt=""
		/>
		<div
			:class="{ paused: isPaused, animate: !isDragging }"
			class="ending-img-container"
			:style="`width: ${position}%;`"
		>
			<div class="ending-img-int-container">
				<img
					draggable="false"
					@click="togglePaused"
					class="image ending-img"
					:src="img2"
					alt=""
				/>
				<Icon
					draggable="true"
					@mousedown="
						(clickStart = true), (isPaused = true)
					"
					@mouseup="
						(clickStart = false), (isDragging = false)
					"
					@mousemove="clickSlider"
					@touchstart="isPaused = true"
					@touchmove="dragSlider"
					class="marker-triangle btm-triangle"
					name="fad:sliderhandle-1"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isPaused: false,
			isDragging: false,
			clickStart: false,
			position: 50,
		};
	},
	methods: {
		togglePaused() {
			if (this.isPaused === true) {
				this.isPaused = false;
			} else {
				this.isPaused = true;
			}
		},
		dragSlider(event) {
			event.target.closest('.imageSplit').offsetWidth;
			this.isDragging = true;
			let tempPosition =
				100 -
				event.touches[0].clientX /
					(event.target.closest('.imageSplit').offsetWidth *
						0.01);
			if (tempPosition >= 100) {
				this.position = 99;
			}
			if (tempPosition <= 0) {
				this.position = 1;
			}
			if (tempPosition > 0 && tempPosition < 99) {
				this.position = tempPosition;
			}
		},
		// clickSlider(event) {
		// 	if (this.clickStart === true) {
		// 		this.isDragging = true;
		// 		this.position = 100 - event.clientX / 19.2;
		// 	}
		// },
	},
	props: ['img1', 'img2'],
};
</script>

<style scoped>
.imageSplit {
	position: relative;
	width: 100%;
	height: fit-content;
	cursor: pointer;
	/* margin-bottom: 2rem; */
}

.marker-triangle {
	width: 4rem;
	height: 4rem;
	color: var(--brand-red);
	z-index: 5;
	cursor: grab;
}

.top-triangle {
	top: 0;
	left: 0;
	position: absolute;
	transform: translate(calc(50% + 2px), 50%);
	rotate: 180deg;
}
.btm-triangle {
	bottom: -3.5rem;
	left: 0;
	transform: translate(0%, calc(50% + 1px));
	position: absolute;
	rotate: 90deg;
}

.image {
	width: 100%;
	height: 100%;
}

.starting-img {
	z-index: 1;
}
.ending-img {
	top: 0;
	right: 0;
	z-index: 2;
	width: 100%;
	object-fit: cover;
	object-position: right;
}

.ending-img-container {
	width: 0%;
	height: 100%;
	z-index: 4;
	position: absolute;
	top: 0;
	right: 0;
	/* border-left: 2px solid var(--brand-red); */
}
.ending-img-int-container {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	/* Not sure why this padding is needed to align the images */
	padding-bottom: 2px;
}

.animate {
	animation: slide-over 15s linear;
	animation-iteration-count: infinite;
}

@keyframes slide-over {
	0% {
		width: 50%;
	}
	25% {
		width: 85%;
	}
	75% {
		width: 15%;
	}
	100% {
		width: 50%;
	}
}

.paused {
	animation-play-state: paused;
}
</style>
