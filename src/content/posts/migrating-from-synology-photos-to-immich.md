---
title: Migrating from Synology Photos to Immich
description: How I migrated my family photo library to Immich while keeping Synology as the reliable storage layer and using Tailscale for private access.
pubDate: 2026-07-11
created: 2026-07-11T09:26
tags:
  - immich
  - synology
  - self-hosting
  - homelab
  - photos
---

I finally found the time to migrate from Synology Photos to Immich.

Synology Photos handled the basics well, but Immich is now mature enough for my home setup and offers a much richer feature set. The best part is that I did not have to give up my Synology NAS as reliable storage.

My current setup is straightforward:

- Immich provides the interface, mobile apps, and library management.
- Photos are stored on an NFS share hosted by Synology.
- The disks use Synology Hybrid RAID with one-drive fault tolerance.
- Immich is available through Tailscale without being exposed to the public internet.

## Private access through Tailscale

Immich is available to the relevant users in my tailnet at an address like:

```text
https://immich.<your-tailnet>.ts.net
```

Tailscale provides private DNS, HTTPS, and access control between devices. There is no need to open router ports or expose the photo library directly to the internet.

This works particularly well for a family service: add a device to the tailnet once, and Immich feels much like an ordinary cloud application.

Before relying on this setup, review your Tailscale ACLs or grants and ensure that the service is available only to the intended users and devices.

## Synology remains the storage layer

The photos themselves live on an NFS share hosted by Synology. This gives me Immich’s modern interface while preserving my existing storage and SHR protection against a single drive failure.

RAID is not a backup, however. It can keep the system running after a drive failure, but it does not protect against accidental deletion, data corruption, application errors, or the loss of the entire NAS. The media library and Immich data still need a separate backup.

It is also important not to place PostgreSQL on a regular NFS share without fully understanding the implications. In my setup, NFS holds the media files, while the database and other service data use separate local storage with their own backup plan.

## Fast mobile apps

One of Immich’s most noticeable advantages is its responsive iOS and Android apps.

Automatic photo uploads, timeline browsing, albums, and search feel like parts of one coherent product rather than a web interface placed on top of a directory of files. The mobile experience matters because it determines whether the rest of the family will actually use a self-hosted photo system.

## Albums as a screensaver with ImmichFrame

Another nice feature is the ability to display Immich albums as a screensaver or digital photo frame on Android devices.

[ImmichFrame](https://github.com/immichFrame/ImmichFrame) can turn an old tablet or Android TV device into a family photo frame that automatically displays selected Immich albums.

There is a useful demonstration of this setup in [this video](https://www.youtube.com/watch?v=PUdmL1ReKAA).

## Migrating with the Immich CLI

I used the Immich CLI to import the existing library. Instead of manually moving files, the CLI supports bulk directory uploads and makes the migration repeatable.

During import, Immich preserves available file metadata, including capture time and location, while the server helps prevent identical files from being added more than once.

Before importing a large library, I recommend:

1. Update Immich Server and the CLI to compatible versions.
2. Test the import with a small directory first.
3. Verify time zones, capture dates, locations, and videos.
4. Do not delete the Synology Photos library immediately after migration.
5. Compare the item counts and inspect a sample of original files before switching over.

The exact command depends on the current CLI version, so check the [official Immich CLI documentation](https://immich.app/docs/features/command-line-interface/) before running the import.

## The result

Synology did not disappear from the system. It now focuses on what it does best: storing data reliably.

Immich provides the convenient layer on top:

- fast access from mobile devices;
- automatic photo uploads;
- a modern timeline and search;
- shared family albums;
- private access through Tailscale;
- Android photo frames through ImmichFrame;
- control over my files without depending on a public photo cloud.

This is one of those cases where a self-hosted solution no longer feels like a compromise. It offers more control while also providing a better everyday experience.

## Example configurations

My configuration repositories are available here:

- [Immich server](https://github.com/Dufran/immich)
- [ImmichFrame](https://github.com/Dufran/immich-frame)

Before reusing these configurations, replace domains, paths, tailnet identifiers, and secrets with your own values.
