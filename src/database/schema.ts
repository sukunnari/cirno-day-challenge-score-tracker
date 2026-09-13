import { sqliteTable } from "drizzle-orm/sqlite-core";
import { int, text, numeric } from "drizzle-orm/sqlite-core";

export const rooms = sqliteTable("rooms", {
	room_id: int().notNull(),
	name: text().notNull(),
	start_date: int({ mode: "timestamp" }).notNull(),
	end_date: int({ mode: "timestamp" }),
});

export const playlist_items = sqliteTable("playlist_items", {
	playlist_item_id: int().notNull(),
	room_id: int()
		.notNull()
		.references(() => rooms.room_id),
	beatmapset_id: int().notNull(),
	beatmapset_title: text().notNull(),
	beatmapset_artist: text().notNull(),
	beatmap_id: int().notNull(),
	beatmap_version: text().notNull(), // "diff name"
	beatmap_difficulty_rating: numeric().notNull(),
});

export const scores = sqliteTable("scores", {
	score_id: int().notNull(),
	playlist_item_id: int()
		.notNull()
		.references(() => playlist_items.playlist_item_id),
	value: int().notNull(),
	mods: text(),
	created: int({ mode: "timestamp" }).notNull(),
});

export const users = sqliteTable("users", {
	user_id: int().notNull().primaryKey(),
	name: text().notNull(),
});
