/*
    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  Scheduleds
(
    id serial PRIMARY KEY,
    scheduledTime bigint NOT NULL,
    businessId text NOT NULL

);