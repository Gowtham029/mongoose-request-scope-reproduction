export interface ServerConfig {
    port: number
}

export interface DatabaseConfig {
    type: string;
    name: string;
    port: number;
    database: string;
    mongoURI: string;
}

export interface JwtConfig {
    expiresIn: number;
    secret: string;
}
