<script>
  import { Lyrics } from "./SwiftieLyricList.svelte";
  import Header from "./Header.svelte";
  let SwiftieLyric = "Swiftie Lyric";
  const randomSwiftieLyric = () => {
    SwiftieLyric = Lyrics[Math.floor(Math.random() * Lyrics.length)];
  }
</script>

<Header/>
<p>{SwiftieLyric}</p>
<button on:click={randomSwiftieLyric}>Random Swiftie Lyric</button>
