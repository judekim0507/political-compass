<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Grid } from '@threlte/extras';
	import type { CompassResults } from '$lib/types';

	interface Props {
		results: CompassResults;
	}

	let { results }: Props = $props();

	const x = $derived(results.economic / 100);
	const y = $derived(results.civil / 100);
	const z = $derived(results.diplomatic / 100);
</script>

<T.PerspectiveCamera makeDefault position={[3, 3, 3]} fov={45}>
	<OrbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[5, 5, 5]} intensity={0.8} />

<Grid
	cellColor="#e5e5e5"
	sectionColor="#a3a3a3"
	fadeDistance={25}
	cellSize={0.5}
	sectionSize={1}
	infiniteGrid
/>

<T.Mesh position={[0, 0, 0]}>
	<T.BoxGeometry args={[2, 2, 2]} />
	<T.MeshBasicMaterial color="#000000" wireframe />
</T.Mesh>

<T.Mesh position={[x, y, z]}>
	<T.SphereGeometry args={[0.08, 32, 32]} />
	<T.MeshStandardMaterial color="#000000" />
</T.Mesh>

<T.Mesh position={[x, y, z]}>
	<T.SphereGeometry args={[0.12, 32, 32]} />
	<T.MeshBasicMaterial color="#ffffff" transparent opacity={0.6} />
</T.Mesh>

<T.Group position={[1.15, 0, 0]}>
	<T.Mesh>
		<T.ConeGeometry args={[0.05, 0.15, 8]} />
		<T.MeshStandardMaterial color="#2563eb" />
	</T.Mesh>
</T.Group>

<T.Group position={[-1.15, 0, 0]}>
	<T.Mesh rotation={[0, 0, Math.PI]}>
		<T.ConeGeometry args={[0.05, 0.15, 8]} />
		<T.MeshStandardMaterial color="#dc2626" />
	</T.Mesh>
</T.Group>

<T.Group position={[0, 1.15, 0]}>
	<T.Mesh>
		<T.ConeGeometry args={[0.05, 0.15, 8]} />
		<T.MeshStandardMaterial color="#9333ea" />
	</T.Mesh>
</T.Group>

<T.Group position={[0, -1.15, 0]}>
	<T.Mesh rotation={[0, 0, Math.PI]}>
		<T.ConeGeometry args={[0.05, 0.15, 8]} />
		<T.MeshStandardMaterial color="#16a34a" />
	</T.Mesh>
</T.Group>

<T.Group position={[0, 0, 1.15]}>
	<T.Mesh rotation={[Math.PI / 2, 0, 0]}>
		<T.ConeGeometry args={[0.05, 0.15, 8]} />
		<T.MeshStandardMaterial color="#0891b2" />
	</T.Mesh>
</T.Group>

<T.Group position={[0, 0, -1.15]}>
	<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
		<T.ConeGeometry args={[0.05, 0.15, 8]} />
		<T.MeshStandardMaterial color="#ea580c" />
	</T.Mesh>
</T.Group>
