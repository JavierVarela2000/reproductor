/**
 * @typedef {Object} Track
 * @property {number} id
 * @property {string} author
 * @property {number} duration
 * @property {string} performer
 * @property {string} s3_artkey
 * @property {string} s3_key
 * @property {string} title
 * @property {string} url
 */

/**
 * @typedef {Object} Playlist
 * @property {number} id
 * @property {string} name
 * @property {Track[]} tracks
 */

/**
 * @typedef {Object} PlayerState
 * @property {boolean} is_playing
 * @property {boolean} is_paused
 * @property {boolean} is_buffering
 * @property {boolean} is_ended
 * @property {boolean} is_seeking
 */
