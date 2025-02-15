import {Session} from '../auth/session/session';
import {Context} from '../context';
import OAuth from '../auth/oauth';

/**
 * Helper method for quickly loading offline sessions by shop url.
 * By default, returns undefined if there is no session, or the session found is expired.
 * Optionally, pass a second argument for 'includeExpired' set to true to return expired sessions.
 *
 * @param shop the shop url to find the offline session for
 * @param includeExpired optionally include expired sessions, defaults to false
 */
export default async function loadOfflineSession(
  shop: string,
  app: string,
  includeExpired = false,
): Promise<Session | undefined> {
  Context.throwIfUninitialized();

  const sessionId = OAuth.getOfflineSessionId(shop, app);
  const session = await Context.SESSION_STORAGE.loadSession(sessionId);

  const now = new Date();

  if (
    session &&
    !includeExpired &&
    session.expires &&
    session.expires.getTime() < now.getTime()
  ) {
    return undefined;
  }

  return session;
}
