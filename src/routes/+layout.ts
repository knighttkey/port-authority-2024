import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
  if (url.pathname === '/') {
    throw redirect(302, '/MAIN');
  }
}