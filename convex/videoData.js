import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewVideoData = mutation({
  args: {
    uid: v.id('users'),
    topic: v.string(),
    lang: v.optional(v.string()),
    scriptVariant: v.any()
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert('videoData', {
      uid: args.uid,
      topic: args.topic,
      lang: args.lang,
      scriptVariant: args.scriptVariant
    })
    return result; // Record ID
  }
})