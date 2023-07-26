<template>
	<nav>
		<NuxtLink @click="showMenu = false" to="/">
			<img
				src="../public/imgs/logo-transparent-horizontal.png"
				alt=""
			/>
		</NuxtLink>
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
	width: 50%;
	padding: 1.75rem 0.5rem;
	text-align: right;
	border-bottom: 2px solid var(--offwhite);
}
li:last-child {
	border: none;
}

.hidden {
	display: none;
}
</style>

<!-- <script>
export default {
	name: 'Header',
};
</script> -->
