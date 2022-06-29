<script>
  import { Facts } from "./SwiftieFactList.svelte";
  let SwiftieFact = "Swiftie Fact";
  const randomSwiftieFact = () => {
    SwiftieFact = Facts[Math.floor(Math.random() * Facts.length)];
  }
</script>

<p>{SwiftieFact}</p>
<button on:click={randomSwiftieFact}>Random Swiftie Fact</button>
