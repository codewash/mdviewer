<script lang="ts">
	export let title: string;
	export let date: string;
</script>

<h1>{title}</h1>
<p class="date">on: {date.split('T')[0]}</p>
<slot>
	<!-- the mdsvex content will be slotted in here -->
</slot>
