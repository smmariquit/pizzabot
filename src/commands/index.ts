import { SlashCommandBuilder } from "discord.js";
import { loadConfig } from "../config.js";
import type { SlashCommand } from "../types.js";

const INFO_MESSAGE = "**Pizza & Friends** — a not-so-serious tech community.\nWebsite: {url}";

export const pingCommand: SlashCommand = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Check bot latency"),
  async execute(interaction) {
    const start = Date.now();
    await interaction.reply({ content: "Pong…", ephemeral: true });
    const ms = Date.now() - start;
    await interaction.editReply({
      content: `Pong — ${ms}ms (gateway: ${interaction.client.ws.ping}ms)`,
    });
  },
};

export const infoCommand: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("pizza")
    .setDescription("Links and info for Pizza & Friends"),
  async execute(interaction) {
    const { PUBLIC_WEBSITE_URL } = loadConfig();
    await interaction.reply({
      content: INFO_MESSAGE.replace("{url}", PUBLIC_WEBSITE_URL),
    });
  },
};

export const commands = [pingCommand, infoCommand];
