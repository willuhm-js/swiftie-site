<script>
  import { Lyrics } from "./SwiftieLyricList.svelte";
  let SwiftieLyric;
  const randomSwiftieLyric = () => {
    SwiftieLyric = Lyrics[Math.floor(Math.random() * Lyrics.length)];
  }
  randomSwiftieLyric();
</script>

<p>{SwiftieLyric}</p>
<button on:click={randomSwiftieLyric}>Random Swiftie Lyric</button>