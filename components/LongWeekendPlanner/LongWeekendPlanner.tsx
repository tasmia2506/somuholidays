"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { LONG_WEEKENDS_2026, LongWeekendItem } from "@/lib/longWeekendsData";
import { waLink } from "@/lib/site";
import styles from "./LongWeekendPlanner.module.css";

export default function LongWeekendPlanner() {
  const [activeCategory, setActiveCategory] = useState<"all" | "3-day" | "4-day" | "mega">("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const months = ["Jan", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const filteredItems = useMemo(() => {
    return LONG_WEEKENDS_2026.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Month filter
      if (selectedMonth !== "all" && item.monthShort !== selectedMonth) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesOccasion = item.occasion.toLowerCase().includes(q);
        const matchesDest = item.destination.toLowerCase().includes(q);
        const matchesMonth = item.month.toLowerCase().includes(q);
        const matchesStrategy = item.leaveStrategy.toLowerCase().includes(q);
        if (!matchesOccasion && !matchesDest && !matchesMonth && !matchesStrategy) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, selectedMonth, searchQuery]);

  return (
    <div className={styles.plannerWrapper} id="long-weekend-planner">
      {/* EaseMyTrip Style Top Header Banner */}
      <div className={styles.bannerHead}>
        <div className={styles.bannerBadge}>
          <Icon name="sparkle" size={14} /> 2026 HOLIDAY CALENDAR · BANGALORE EDITION
        </div>
        <h2 className={styles.bannerTitle}>
          Month-by-Month Long Weekends &amp; Road Trip Planner
        </h2>
        <p className={styles.bannerSub}>
          Don’t let your public holidays slip away! Explore all 14 long weekend getaways from Bangalore in 2026,
          complete with day-by-day leave plans, road distances, and instant cab or luxury bus bookings.
        </p>

        {/* Quick Stats Grid */}
        <div className={styles.statsStrip}>
          <div className={styles.statBox}>
            <span className={styles.statNum}>14</span>
            <span className={styles.statLabel}>Total Long Weekends</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>7</span>
            <span className={styles.statLabel}>Natural 3-Day Breaks</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>6</span>
            <span className={styles.statLabel}>4-Day Extended Trips</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>10-Day Year-End Mega</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & View Switcher */}
      <div className={styles.controlBar}>
        {/* Category Tabs */}
        <div className={styles.categoryTabs}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeCategory === "all" ? styles.tabActive : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Holidays ({LONG_WEEKENDS_2026.length})
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeCategory === "3-day" ? styles.tabActive : ""}`}
            onClick={() => setActiveCategory("3-day")}
          >
            3-Day Breaks (7)
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeCategory === "4-day" ? styles.tabActive : ""}`}
            onClick={() => setActiveCategory("4-day")}
          >
            4-Day Extended (6)
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeCategory === "mega" ? styles.tabActive : ""}`}
            onClick={() => setActiveCategory("mega")}
          >
            10-Day Mega (1)
          </button>
        </div>

        {/* View Switcher */}
        <div className={styles.viewSwitcher}>
          <button
            type="button"
            className={`${styles.viewBtn} ${viewMode === "cards" ? styles.viewBtnActive : ""}`}
            onClick={() => setViewMode("cards")}
            title="Card View"
            aria-label="Switch to Card View"
          >
            <Icon name="grid" size={16} /> Cards View
          </button>
          <button
            type="button"
            className={`${styles.viewBtn} ${viewMode === "table" ? styles.viewBtnActive : ""}`}
            onClick={() => setViewMode("table")}
            title="Comparison Table View"
            aria-label="Switch to Comparison Table View"
          >
            <Icon name="chevron" size={16} /> Table View
          </button>
        </div>
      </div>

      {/* Month Filter Chips & Search Bar */}
      <div className={styles.monthFilterRow}>
        <div className={styles.monthChips}>
          <span className={styles.monthLabel}>Month:</span>
          <button
            type="button"
            className={`${styles.monthChip} ${selectedMonth === "all" ? styles.monthChipActive : ""}`}
            onClick={() => setSelectedMonth("all")}
          >
            All
          </button>
          {months.map((m) => (
            <button
              key={m}
              type="button"
              className={`${styles.monthChip} ${selectedMonth === m ? styles.monthChipActive : ""}`}
              onClick={() => setSelectedMonth(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search holiday, destination, Coorg..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.clearSearch}
              onClick={() => setSearchQuery("")}
              aria-label="Clear Search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Content Rendering: Cards or Table */}
      {filteredItems.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No long weekends found matching your filter criteria.</p>
          <button
            type="button"
            className="btn btnPrimary"
            onClick={() => {
              setActiveCategory("all");
              setSelectedMonth("all");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === "cards" ? (
        <div className={styles.cardGrid}>
          {filteredItems.map((item) => {
            const isMega = item.category === "mega";
            const is4Day = item.category === "4-day";

            return (
              <div
                key={item.id}
                className={`${styles.holidayCard} ${isMega ? styles.megaCard : is4Day ? styles.fourDayCard : ""}`}
              >
                {/* Card Top Strip */}
                <div className={styles.cardHeader}>
                  <div className={styles.monthBadge}>
                    <span>{item.month.toUpperCase()} 2026</span>
                  </div>
                  <div className={styles.badgeRow}>
                    <span
                      className={`${styles.daysBadge} ${
                        isMega ? styles.badgeMega : is4Day ? styles.badgeLong : styles.badgeNormal
                      }`}
                    >
                      {item.daysOff} Days Off
                    </span>
                    {item.leavesNeeded === 0 ? (
                      <span className={styles.zeroLeaveBadge}>No Leave Needed</span>
                    ) : (
                      <span className={styles.leaveNeededBadge}>
                        {item.leavesNeeded} {item.leavesNeeded === 1 ? "Leave" : "Leaves"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Holiday Title & Date */}
                <h3 className={styles.cardTitle}>{item.occasion}</h3>
                <div className={styles.cardDates}>
                  <Icon name="calendar" size={15} />
                  <strong>{item.dates}</strong> ({item.daysRange})
                </div>

                {/* Visual Day-by-Day Timeline Strip */}
                <div className={styles.timelineWrap}>
                  <span className={styles.timelineTitle}>Day Breakdown:</span>
                  <div className={styles.timelineStrip}>
                    {item.timeline.map((slot, idx) => (
                      <div
                        key={idx}
                        className={`${styles.timeSlot} ${styles[`slot_${slot.type}`]}`}
                        title={`${slot.date} (${slot.day}): ${slot.label}`}
                      >
                        <span className={styles.slotDay}>{slot.day}</span>
                        <span className={styles.slotDate}>{slot.date.split(" ")[1]}</span>
                        <span className={styles.slotLabel}>{slot.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leave Strategy Hack */}
                <div className={styles.strategyBox}>
                  <Icon name="sparkle" size={16} />
                  <span>
                    <strong>Leave Plan:</strong> {item.leaveStrategy}
                  </span>
                </div>

                {/* Road Trip Destination Box */}
                <div className={styles.destBox}>
                  <div className={styles.destHeader}>
                    <span className={styles.destTag}>Recommended Road Trip</span>
                    <span className={styles.destDist}>{item.distance} · {item.driveTime}</span>
                  </div>
                  <h4 className={styles.destTitle}>{item.destination}</h4>
                  <p className={styles.destDesc}>{item.routeHighlights}</p>

                  <div className={styles.fleetSuggest}>
                    <Icon name="car" size={14} />
                    <span><strong>Suggested:</strong> {item.suggestedVehicle}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.cardActions}>
                  <a
                    href={waLink(item.bookingText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnPrimary"
                    style={{ flex: 1, padding: "10px 14px", fontSize: "0.875rem" }}
                    title={`Book cab or bus for ${item.occasion}`}
                    aria-label={`Book cab or bus for ${item.occasion}`}
                  >
                    <Icon name="whatsapp" size={16} /> Book for This Break
                  </a>
                  {item.blogLink && (
                    <Link
                      href={item.blogLink}
                      className="btn btnGhost"
                      style={{ padding: "10px 14px", fontSize: "0.875rem" }}
                      title={`View route guide for ${item.destination}`}
                      aria-label={`View route guide for ${item.destination}`}
                    >
                      Route Guide <Icon name="arrow" size={14} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Full EaseMyTrip Master Table View */
        <div className={styles.tableResponsive}>
          <table className={styles.plannerTable}>
            <thead>
              <tr>
                <th style={{ width: "16%" }}>Month &amp; Dates</th>
                <th style={{ width: "20%" }}>Occasion / Festival</th>
                <th style={{ width: "10%" }}>Duration</th>
                <th style={{ width: "22%" }}>Leave Strategy</th>
                <th style={{ width: "22%" }}>Best Bangalore Road Trip</th>
                <th style={{ width: "10%" }}>Instant Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const isMega = item.category === "mega";
                const is4Day = item.category === "4-day";

                return (
                  <tr key={item.id} className={isMega ? styles.rowMega : ""}>
                    <td>
                      <strong className={styles.tblDate}>{item.dates}</strong>
                      <div className={styles.tblSub}>{item.daysRange}</div>
                    </td>
                    <td>
                      <div className={styles.tblOccasion}>{item.occasion}</div>
                    </td>
                    <td>
                      <span
                        className={`${styles.daysBadge} ${
                          isMega ? styles.badgeMega : is4Day ? styles.badgeLong : styles.badgeNormal
                        }`}
                      >
                        {item.daysOff} Days
                      </span>
                    </td>
                    <td>
                      <div className={styles.tblStrategy}>
                        {item.leavesNeeded === 0 ? (
                          <span className={styles.zeroLeaveText}>✓ {item.leaveStrategy}</span>
                        ) : (
                          <span className={styles.leaveText}>💡 {item.leaveStrategy}</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className={styles.tblDest}>
                        <strong>{item.destination}</strong>
                        <div className={styles.tblDist}>{item.distance} · {item.driveTime}</div>
                        {item.blogLink && (
                          <Link href={item.blogLink} className={styles.tblGuideLink}>
                            View Route Guide →
                          </Link>
                        )}
                      </div>
                    </td>
                    <td>
                      <a
                        href={waLink(item.bookingText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.tblActionBtn}
                        title={`Book cab or bus for ${item.occasion}`}
                        aria-label={`Book cab or bus for ${item.occasion}`}
                      >
                        <Icon name="whatsapp" size={14} /> Book
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Corporate HR & Leave Optimization Tip Card */}
      <div className={styles.leaveHackCard}>
        <div className={styles.hackIcon}>
          <Icon name="sparkle" size={24} />
        </div>
        <div className={styles.hackContent}>
          <h4>Pro-Tip for Bengaluru IT &amp; Corporate Professionals:</h4>
          <p>
            By combining just <strong>4 strategic casual leaves</strong> across 2026 with Karnataka gazetted holidays,
            you can unlock a total of <strong>47 vacation days</strong>. Reserve your outstation Innova Crysta or
            21-seater bus 10–14 days in advance to lock in transparent flat per-km rates with zero surge pricing!
          </p>
        </div>
      </div>
    </div>
  );
}
