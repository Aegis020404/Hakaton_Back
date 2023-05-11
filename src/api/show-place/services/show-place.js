'use strict';

/**
 * show-place service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::show-place.show-place');
