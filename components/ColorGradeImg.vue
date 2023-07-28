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
					@mouseup="clickStart = false"
					@mouseleave="clickStart = false"
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
		clickSlider(event) {
			if (this.clickStart === true) {
				this.isDragging = true;

				let tempPosition =
					100 -
					event.x /
						(event.target.closest('.imageSplit')
							.offsetWidth *
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
			}
		},
	},
	props: ['img1', 'img2'],
};
</script>

<style scoped>
.imageSplit {
	/* border: 2px solid red;
	border-radius: 29px; */
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
	transform: translate(0%, 50%);
	position: absolute;
	rotate: 90deg;
}

.image {
	width: 100%;
	height: 100%;
}

.starting-img {
	z-index: 1;
	border: 2px solidvar(--dark-brown);
	border-radius: 9px;
}
.ending-img {
	border-top: 2px solid var(--dark-brown);
	border-right: 2px solid var(--dark-brown);
	border-bottom: 2px solid var(--dark-brown);
	border-top-right-radius: 9px;
	border-bottom-right-radius: 9px;
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

@media (min-width: 550px) {
	.marker-triangle {
		width: 8rem;
		height: 8rem;
	}
	.btm-triangle {
		bottom: -7rem;
	}
	.imageSplit {
		margin-bottom: 4rem;
	}
	.starting-img {
		border: 2px solidvar(--dark-brown);
		border-radius: 12px;
	}
	.ending-img {
		border-top: 3px solid var(--dark-brown);
		border-right: 3px solid var(--dark-brown);
		border-bottom: 3px solid var(--dark-brown);
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
	}
}
@media (min-width: 1100px) {
	.marker-triangle {
		width: 10rem;
		height: 10rem;
	}
	.btm-triangle {
		bottom: -9rem;
	}
	.imageSplit {
		margin-bottom: 6rem;
	}
}
</style>
