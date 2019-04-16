CREATE TABLE IF NOT EXISTS user_account (
    username TEXT PRIMARY KEY,
    password TEXT,
    created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_stat (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
    birth_date TIMESTAMP,
    weight_in_gram INTEGER,
    height_in_centimetre INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    compendium_code TEXT,
    kcal_per_kg_hour decimal,
    kcal_per_kg_minute decimal,
    kcal_per_kg_second decimal
);

CREATE TABLE IF NOT EXISTS user_activity_log (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
    fk_activity_id TEXT,
    activity_count INTEGER,
    duration_in_second INTEGER,
    current_weight_in_gram INTEGER,
    current_height_in_centimetre INTEGER,
    kcal_burned INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);