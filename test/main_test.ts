import { assertEquals } from "@std/assert";
import { generate } from "../src/main.ts";

Deno.test(function addTest() {
  assertEquals(generate(5), "11111");
});
