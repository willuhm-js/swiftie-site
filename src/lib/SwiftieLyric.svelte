<script>
  import { Lyrics } from "./SwiftieLyricList.svelte";
  import Bootstrap from "./Bootstrap.svelte";
  let SwiftieLyric = "Swiftie Lyric";
  const randomSwiftieLyric = () => {
    SwiftieLyric = Lyrics[Math.floor(Math.random() * Lyrics.length)];
  }
</script>

<Bootstrap/>
<p>{SwiftieLyric}</p>
<button on:click={randomSwiftieLyric}>Random Swiftie Lyric</button>
