import { web } from './config/web.js';
import { logger } from './config/logging.js';

web.listen(9000, () => {
  logger.info('App start');
});
