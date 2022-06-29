<script>
  import SwiftieLyric from './lib/SwiftieLyric.svelte'
</script>

<main>
  <div class="text-center">
    <h1 class="display-1 mt-3 mb-4">swiftie</h1>
    <p class="fst-italic">You can't spell awesome without me!</p>
  </div>
  <div class="position-absolute top-50 start-50 translate-middle text-center">
    <SwiftieLyric />
  </div>
</main>

<style>
   @font-face { font-family: TaylorSwift; src: url('/TaylorSwift.ttf'); }
   h1 {
        font-family: TaylorSwift;
        text-align: center;
   } 
</style>