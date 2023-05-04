<script lang="ts">
	const links = [
		{ name: "GitHub", url: "https://github.com/pernthaler/website" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/pernthaler" },
		{ name: "Xing", url: "https://www.xing.com/profile/Sebastian_Pernthaler" }
	];
</script>

<section>
	<h1>Sebastian Pernthaler</h1>
	<ul>
		{#each links as { name, url }}
			<li><a href="{url}" target="_blank" rel="noreferrer">{name}</a></li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		text-align: center;
	}

	ul {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		list-style: none;
	}

	a {
		color: black;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>