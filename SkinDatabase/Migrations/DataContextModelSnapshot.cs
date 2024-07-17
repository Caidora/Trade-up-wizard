﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SkinDatabase.Data;

#nullable disable

namespace SkinDatabase.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.7");

            modelBuilder.Entity("SkinDatabase.Models.Contract", b =>
                {
                    b.Property<int>("contractID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("createdBy")
                        .HasColumnType("INTEGER");

                    b.HasKey("contractID");

                    b.ToTable("Contracts");
                });

            modelBuilder.Entity("SkinDatabase.Models.ContractToSkin", b =>
                {
                    b.Property<int>("relationshipID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("collectionID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("rarity")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<int>("skinID")
                        .HasMaxLength(40)
                        .HasColumnType("INTEGER");

                    b.HasKey("relationshipID");

                    b.ToTable("ContractToSkins");
                });

            modelBuilder.Entity("SkinDatabase.Models.Follow", b =>
                {
                    b.Property<int>("followsID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("createdAt")
                        .HasColumnType("INTEGER");

                    b.Property<int>("followedUserID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("followingUserID")
                        .HasColumnType("INTEGER");

                    b.HasKey("followsID");

                    b.ToTable("Follows");
                });

            modelBuilder.Entity("SkinDatabase.Models.Skin", b =>
                {
                    b.Property<int>("skinID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("collectionID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("rarity")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<string>("skinName")
                        .IsRequired()
                        .HasMaxLength(40)
                        .HasColumnType("TEXT");

                    b.HasKey("skinID");

                    b.ToTable("Skins");
                });

            modelBuilder.Entity("SkinDatabase.Models.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.HasKey("UserID");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
