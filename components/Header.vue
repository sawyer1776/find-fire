<template>
	<nav>
		<NuxtLink @click="showMenu = false" to="/">
			<img
				src="/imgs/logo-transparent-horizontal.webp"
				alt="link to home"
			/>
		</NuxtLink>
		<div class="right-side">
			<ul
				:class="showMenu ? '' : 'hidden'"
				@click="toggleMenu"
			>
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/#services">Services</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/creative">Creative</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/offline">Offline</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/online">Online</NuxtLink>
				</li>
			</ul>
			<div class="menu-contact">
				<NuxtLink @click="showMenu = false" to="#contact">
					<button>Contact</button>
				</NuxtLink>

				<Icon
					@click="toggleMenu"
					class="icon"
					:name="
						showMenu ? 'ep:close-bold' : 'ic:baseline-menu'
					"
				/>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		toggleMenu() {
			if (this.showMenu === true) {
				this.showMenu = false;
			} else {
				this.showMenu = true;
			}
		},
	},
};
</script>

<style scoped>
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: var(--offwhite);
	color: var(--dark-brown);
	width: 100vw;
	height: 7.5rem;
	position: relative;
	position: sticky;
	top: 0;
	z-index: 1000;
	border-bottom: 2px solid var(--dark-brown);
}

button {
	font-size: 1.2rem;
	padding: 0.5rem 1rem;
	box-shadow: 0.3rem 0.3rem 0 var(--dark-brown);
	text-shadow: 1px 1px 0 black;
}
button:hover {
	transform: translate(-0.05rem, -0.05rem);
	box-shadow: 0.35rem 0.35rem 0 black;
}

button:active {
	transform: translate(0.3rem, 0.3rem);
	box-shadow: 0 0 0 black;
}

img {
	width: 45vw;
	height: auto;
	object-fit: contain;
}
.icon {
	margin-right: 1rem;
	width: 3.5rem;
	height: 3.5rem;
	cursor: pointer;
	color: var(--dark-brown);
}
.menu-contact {
	display: flex;
	align-items: center;

	gap: 1rem;
}

ul {
	position: absolute;
	top: 7rem;
	right: 0;
	padding: 4rem;
	background-color: var(--dark-brown);
	opacity: 95%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0rem;
	width: 100vw;
	border-top: 2px solid var(--dark-brown);
}

li {
	text-transform: uppercase;
	font-size: 3rem;
	color: var(--offwhite);
	font-weight: 600;
	width: 70%;
	padding: 1.75rem 0.5rem;
	text-align: right;
	border-bottom: 2px solid var(--offwhite);
}
li:last-child {
	border: none;
}
.right-side {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
}

.hidden {
	display: none;
}

/* ---Landscape Tablets --- */
@media (min-width: 550px) {
	nav {
		height: 8.5rem;
	}
	img {
		width: 28rem;
		height: auto;
	}
	button {
		font-size: 2.4rem;
		padding: 0.5rem 1rem;
		box-shadow: 0.4rem 0.4rem 0 var(--dark-brown);
	}
	button:hover {
		transform: translate(-0.08rem, -0.08rem);
		box-shadow: 0.45rem 0.45rem 0 black;
	}

	button:active {
		transform: translate(0.4rem, 0.4rem);
		box-shadow: 0 0 0 black;
	}
	.icon {
		margin-right: 2rem;
		width: 5rem;
		height: 5rem;
	}
}

/* ---Desktop--- */
@media (min-width: 1090px) {
	.icon {
		display: none;
	}
	.hidden {
		display: flex;
		flex-direction: row;
		gap: 0;
	}
	ul {
		display: flex;
		flex-direction: row;
		gap: 0;
		position: static;
		background-color: transparent;
		color: var(--brand-brown);
		width: fit-content;
		justify-self: flex-end;

		padding-right: 1rem;
	}

	li {
		font-size: 2.1rem;
		color: var(--brand-brown);
		font-weight: 800;
		width: 100%;
		padding: 0.5rem 1rem;
		text-align: center;
		border-bottom: none;
		border-right: 2px solid var(--light-grey);
	}
	li:last-child {
		border-bottom: none;
	}
	button {
		margin-right: 1rem;
		font-size: 2rem;
		padding: 0.5rem 1rem;
		box-shadow: 0.3rem 0.3rem 0 var(--dark-brown);
	}
	nav {
		padding: 0.75rem 3rem;
	}
}
</style>
