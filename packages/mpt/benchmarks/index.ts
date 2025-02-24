import { createSuite } from "./suite";
import { LevelDB } from "./engines/level";
import { MapDB } from "@zondjs/util";

createSuite(new MapDB());
createSuite(new LevelDB());
