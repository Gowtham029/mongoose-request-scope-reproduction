import { NestMiddleware, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { readFileSync } from "fs";
import { resolve } from "path";
import * as yaml from "js-yaml";

/**
 * The DB Middleware to assign the DB URI for each request
 *
 * @export
 * @class DBMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class DBMiddleware implements NestMiddleware {
    /**
     *Creates an instance of DBMiddleware.
     * @param {DBService} config
     * @memberof DBMiddleware
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    /**
     * To assign the DB URI for each request
     *
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     * @returns {Promise<void>}
     * @memberof DBMiddleware
     */
    async use(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const filePath = resolve("config","database.config.yml");
            const DB_URIS = yaml.load(readFileSync(filePath, "utf8"));
            if( DB_URIS.customers && DB_URIS.customers.length > 0){
                    const result = DB_URIS.customers.filter((data) => {
                        if (data.domain === request.hostname){
                            return data;
                        }
                    });
                    if (result.length > 0){
                        request["DB_URI"] = result[0].mongouri;
                    }
                    next();
                    return;
            }
            next();
            return;
        } catch (error) {
            throw new HttpException("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
