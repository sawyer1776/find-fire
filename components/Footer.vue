<template>
	<footer>
		<ul>
			<li><h2>Contact</h2></li>
			<li><p>Give us a call (123) 456-7890</p></li>
			<li><p>email: contact@findfiredigital</p></li>
		</ul>
		<ul>
			<li><h2>Reel</h2></li>
			<li><a href="#">View Reel</a></li>
		</ul>
		<ul>
			<li><h2>Services</h2></li>
			<li><NuxtLink to="/creative">Creative</NuxtLink></li>
			<li><NuxtLink to="/offline">Offline</NuxtLink></li>
			<li><NuxtLink to="/online">Online</NuxtLink></li>
		</ul>

		<p class="copyright">
			© 2023 Find Fire Productions LLC
		</p>
	</footer>
</template>

<style scoped>
footer {
	background-color: var(--dark-brown);
	width: 100%;
	color: var(--light-grey);
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 2rem 1rem;
}

h2 {
	font-size: 1.8rem;
	font-weight: 800;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
}
p {
	font-size: 1.8rem;
}
ul {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	border-bottom: 2px solid var(--light-grey);
	padding-bottom: 1rem;
}

a {
	font-size: 1.8rem;
	color: var(--light-grey);
	font-weight: 300;
}
.copyright {
	margin: 2rem 0;
	font-size: 1.2rem;
	font-weight: 300;
}
@media (min-width: 550px) {
	footer {
		gap: 3rem;
		padding: 3rem 2rem;
	}

	h2 {
		font-size: 3.5rem;
	}
	p {
		font-size: 3rem;
	}
	ul {
		gap: 1.5rem;
		border-bottom: 4px solid var(--light-grey);
		padding-bottom: 2rem;
	}

	a {
		font-size: 3rem;
	}
	.copyright {
		font-size: 2rem;
	}
}

@media (min-width: 1090px) {
	footer {
		width: 75vw;
		max-width: 190rem;
		margin: 0 auto;
		padding: 3rem 0;
	}
}
</style>
