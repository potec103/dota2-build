// Данные героев и билдов
const heroesData = [
    {
        id: 1,
        name: "Anti-Mage",
        attribute: "AGI",
        roles: ["Carry", "Escape"],
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
        builds: {
            early: [
                { name: "Quelling Blade", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
                { name: "Magic Stick", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_stick.png" },
                { name: "Tango", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" }
            ],
            mid: [
                { name: "Battle Fury", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png" },
                { name: "Manta Style", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
                { name: "Power Treads", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" }
            ],
            late: [
                { name: "Abyssal Blade", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
                { name: "Butterfly", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
                { name: "Skadi", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" }
            ],
            talents: [
                { level: 10, left: "+200 Mana Break", right: "+15 Agility" },
                { level: 15, left: "+15% Spell Shield", right: "+10 All Stats" },
                { level: 20, left: "-2s Blink Cooldown", right: "+25 Attack Speed" },
                { level: 25, left: "Blink Uncontrollable Illusion", right: "+0.2 Mana Void Aghanim Multiplier" }
            ]
        }
    },
    {
        id: 2,
        name: "Invoker",
        attribute: "INT",
        roles: ["Carry", "Nuker", "Disabler"],
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
        builds: {
            early: [
                { name: "Null Talisman", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/null_talisman.png" },
                { name: "Magic Wand", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" },
                { name: "Tango", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" }
            ],
            mid: [
                { name: "Aghanim's Scepter", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
                { name: "Octarine Core", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
                { name: "Boots of Travel", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
            ],
            late: [
                { name: "Refresher Orb", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
                { name: "Shiva's Guard", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
                { name: "Sheepstick", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png" }
            ],
            talents: [
                { level: 10, left: "+1.5s Cold Snap", right: "+25 Chaos Meteor Contact Damage" },
                { level: 15, left: "+1 Forged Spirit Summoned", right: "+30 Alacrity Damage/Speed" },
                { level: 20, left: "Cataclysm", right: "-12s Tornado Cooldown" },
                { level: 25, left: "-16s Cold Snap Cooldown", right: "Sun Strike Pure Damage" }
            ]
        }
    },
    {
        id: 3,
        name: "Crystal Maiden",
        attribute: "INT",
        roles: ["Support", "Disabler", "Nuker"],
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
        builds: {
            early: [
                { name: "Clarity", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/clarity.png" },
                { name: "Tango", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
                { name: "Observer Ward", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ward_observer.png" }
            ],
            mid: [
                { name: "Glimmer Cape", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png" },
                { name: "Force Staff", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
                { name: "Tranquil Boots", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png" }
            ],
            late: [
                { name: "Aghanim's Scepter", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
                { name: "BKB", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
                { name: "Scythe of Vyse", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png" }
            ],
            talents: [
                { level: 10, left: "+200 Health", right: "+1.5s Frostbite Duration" },
                { level: 15, left: "+100 Cast Range", right: "+100 Crystal Nova Damage" },
                { level: 20, left: "+120 Gold/Min", right: "+2s Freezing Field Duration" },
                { level: 25, left: "+250 Freezing Field Damage", right: "-10s Frostbite Cooldown" }
            ]
        }
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadHeroes();
    setupSearch();
});

// Загрузка списка героев
function loadHeroes() {
    const heroGrid = document.getElementById('heroGrid');
    heroGrid.innerHTML = '';

    heroesData.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card';
        heroCard.onclick = () => showHeroBuild(hero);
        
        heroCard.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}">
            <span>${hero.name}</span>
        `;
        
        heroGrid.appendChild(heroCard);
    });
}

// Настройка поиска
function setupSearch() {
    const searchInput = document.getElementById('heroSearch');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const heroCards = document.querySelectorAll('.hero-card');
        
        heroCards.forEach(card => {
            const heroName = card.querySelector('span').textContent.toLowerCase();
            if (heroName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Показать билд героя
function showHeroBuild(hero) {
    document.querySelector('.hero-selector').classList.add('hidden');
    document.getElementById('buildSection').classList.remove('hidden');
    
    // Заполняем информацию о герое
    document.getElementById('heroImage').src = hero.image;
    document.getElementById('heroName').textContent = hero.name;
    document.getElementById('heroAttribute').textContent = hero.attribute;
    document.getElementById('heroRoles').textContent = hero.roles.join(', ');
    
    // Заполняем предметы
    fillItems('earlyItems', hero.builds.early);
    fillItems('midItems', hero.builds.mid);
    fillItems('lateItems', hero.builds.late);
    
    // Заполняем таланты
    fillTalents(hero.builds.talents);
    
    // Сбрасываем табы к первому
    openTab('early');
}

// Заполнение предметов
function fillItems(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        container.appendChild(itemCard);
    });
}

// Заполнение талантов
function fillTalents(talents) {
    const container = document.getElementById('talentsList');
    container.innerHTML = '';
    
    talents.forEach(talent => {
        const talentRow = document.createElement('div');
        talentRow.className = 'talent-row';
        talentRow.innerHTML = `
            <span>${talent.left}</span>
            <span class="talent-level">Level ${talent.level}</span>
            <span>${talent.right}</span>
        `;
        container.appendChild(talentRow);
    });
}

// Показать выбор героя
function showHeroSelection() {
    document.querySelector('.hero-selector').classList.remove('hidden');
    document.getElementById('buildSection').classList.add('hidden');
}

// Управление табами
function openTab(tabName) {
    // Скрыть все табы
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Убрать активный класс со всех кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Показать выбранный таб
    document.getElementById(tabName).classList.add('active');
    
    // Активировать соответствующую кнопку
    event.currentTarget.classList.add('active');
}