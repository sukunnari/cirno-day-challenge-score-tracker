PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_playlist_items` (
	`playlist_item_id` integer NOT NULL,
	`room_id` integer NOT NULL,
	`beatmapset_id` integer NOT NULL,
	`beatmapset_title` text NOT NULL,
	`beatmapset_artist` text NOT NULL,
	`beatmap_id` integer NOT NULL,
	`beatmap_version` text NOT NULL,
	`beatmap_difficulty_rating` integer NOT NULL,
	FOREIGN KEY (`room_id`) REFERENCES `rooms`(`room_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_playlist_items`("playlist_item_id", "room_id", "beatmapset_id", "beatmapset_title", "beatmapset_artist", "beatmap_id", "beatmap_version", "beatmap_difficulty_rating") SELECT "playlist_item_id", "room_id", "beatmapset_id", "beatmapset_title", "beatmapset_artist", "beatmap_id", "beatmap_version", "beatmap_difficulty_rating" FROM `playlist_items`;--> statement-breakpoint
DROP TABLE `playlist_items`;--> statement-breakpoint
ALTER TABLE `__new_playlist_items` RENAME TO `playlist_items`;--> statement-breakpoint
PRAGMA foreign_keys=ON;