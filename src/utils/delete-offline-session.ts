import {Context} from '../context';
import OAuth from '../auth/oauth';

/**
 * Helper method to find and delete offline sessions by shop url.
 *
 * @param shop the shop url to find and delete a session for
 */
export default async function deleteOfflineSession(
  shop: string,
  app: string,
): Promise<boolean> {
  Context.throwIfUninitialized();

  const sessionId = OAuth.getOfflineSessionId(shop, app);

  return Context.SESSION_STORAGE.deleteSession(sessionId);
}
