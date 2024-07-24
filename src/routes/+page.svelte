<script context="module">
    import { goto } from '$app/navigation';
  
    export async function load({ page }) {
      if (page.path === '/') {
        goto('/MAIN', { replaceState: true });
      }
    }
  </script>