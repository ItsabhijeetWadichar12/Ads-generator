import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateNewVideoData = mutation({
  args: {
    uid: v.id('users'),
    topic: v.string(),
    scriptVariant: v.any()
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert('videoData', {
      uid: args.uid,
      topic: args.topic,
      scriptVariant: args.scriptVariant
    })
    return result; // Record ID
  }
})


export const GetVideoDataById = query({
  args: {
    vid: v.id('videoData')
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.get(args.vid);
    return result;
  }
})


export const UpdateVideoData = mutation({
  args: {
    topic: v.string(),
    scriptVariant: v.any(),
    script: v.optional(v.any()),
    assest: v.optional(v.any()),
    avatar: v.optional(v.any()),
    voice: v.optional(v.any()),
    voiceUrl: v.optional(v.any()),
    status: v.optional(v.number()),
    videodataID: v.id('videoData')
  },
  handler: async (ctx, agrs) => {
    const result = await ctx.db.patch(args.videodataID, {
      assest: agrs.assest,
      avatar: agrs.avatar,
      script: agrs.script,
      voice: agrs.voice,
      topic: agrs.topic,
      status: 1,
      voiceUrl: agrs.voiceUrl,
      scriptVariant: agrs.scriptVariant
    })
    return result; // Record ID
  }
})