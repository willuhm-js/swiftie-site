<script>
  import SwiftieLyric from './lib/SwiftieLyric.svelte'
  import Header from './lib/Header.svelte';
</script>

<Header/>
<main>
  <h1>swiftie</h1>
  <p>You can't spell awesome without me!</p>
  <SwiftieLyric />
</main>

<style>
   @font-face { font-family: TaylorSwift; src: url('TaylorSwift.ttf'); }
   h1 {
        font-family: TaylorSwift;
        text-align: center;
   } 
</style>