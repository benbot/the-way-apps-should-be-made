/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE jwt AS (
    "role" text,
    exp integer,
    person_id integer
);

CREATE TABLE USERs (
    id serial PRIMARY KEY,
    username text UNIQUE,
    pass text,
    salt text
);

CREATE FUNCTION addUser (usrname text, pswd text)
    RETURNS jwt
    AS $$
DECLARE
    salt text = gen_salt('bf');
    passwd text = crypt(pswd, salt);
BEGIN
    INSERT INTO users (username, pass, salt)
    VALUES (usrname, passwd, salt);
    -- all test data being returned
    RETURN ('new',
        12, (
            SELECT
                id FROM users
            WHERE
                username = usrname))::jwt;
END;
$$
LANGUAGE plpgsql
VOLATILE STRICT;

