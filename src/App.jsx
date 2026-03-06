import { useState, useEffect, useCallback, useRef } from "react";

const ROADMAP = [
	{
		id: "m1",
		title: "Fundamentos da Web",
		subtitle: "A base de tudo",
		deadline: "Mar 2026",
		color: "#00ff88",
		icon: "🌐",
		topics: [
			{
				id: "m1t1",
				name: "Como funciona a Internet (HTTP, DNS, TCP/IP)",
				level: "básico",
			},
			{
				id: "m1t2",
				name: "HTML5 semântico e estrutura de documentos",
				level: "básico",
			},
			{ id: "m1t3", name: "CSS3 — box model, flexbox, grid", level: "básico" },
			{
				id: "m1t4",
				name: "JavaScript — variáveis, funções, DOM, eventos",
				level: "básico",
			},
			{
				id: "m1t5",
				name: "Git & GitHub — commits, branches, pull requests",
				level: "básico",
			},
			{
				id: "m1t6",
				name: "Terminal Linux — comandos essenciais",
				level: "básico",
			},
			{
				id: "m1t7",
				name: "HTTP Methods — GET, POST, PUT, DELETE, PATCH",
				level: "básico",
			},
			{
				id: "m1t8",
				name: "JSON — estrutura, parse, stringify",
				level: "básico",
			},
		],
	},
	{
		id: "m2",
		title: "PHP Essencial",
		subtitle: "Dominando a linguagem",
		deadline: "Mai 2026",
		color: "#7c3aed",
		icon: "🐘",
		topics: [
			{
				id: "m2t1",
				name: "Sintaxe PHP — tipos, variáveis, operadores",
				level: "básico",
			},
			{
				id: "m2t2",
				name: "Estruturas de controle — if, switch, loops",
				level: "básico",
			},
			{
				id: "m2t3",
				name: "Funções — parâmetros, retorno, escopo",
				level: "básico",
			},
			{
				id: "m2t4",
				name: "Arrays — array_map, array_filter, array_reduce",
				level: "básico",
			},
			{
				id: "m2t5",
				name: "Strings — funções nativas, regex básico",
				level: "básico",
			},
			{
				id: "m2t6",
				name: "Manipulação de arquivos e diretórios",
				level: "intermediário",
			},
			{
				id: "m2t7",
				name: "Sessions, Cookies e Headers",
				level: "intermediário",
			},
			{
				id: "m2t8",
				name: "Composer — instalação, autoload, PSR-4",
				level: "intermediário",
			},
			{
				id: "m2t9",
				name: "PSR Standards (PSR-1, PSR-2, PSR-12)",
				level: "intermediário",
			},
			{
				id: "m2t10",
				name: "Tratamento de erros e exceções",
				level: "intermediário",
			},
		],
	},
	{
		id: "m3",
		title: "Orientação a Objetos & Boas Práticas",
		subtitle: "Código que escala",
		deadline: "Jun 2026",
		color: "#f59e0b",
		icon: "🏗️",
		topics: [
			{
				id: "m3t1",
				name: "Classes, objetos, propriedades e métodos",
				level: "intermediário",
			},
			{
				id: "m3t2",
				name: "Encapsulamento, herança e polimorfismo",
				level: "intermediário",
			},
			{
				id: "m3t3",
				name: "Interfaces e classes abstratas",
				level: "intermediário",
			},
			{ id: "m3t4", name: "Traits em PHP", level: "intermediário" },
			{ id: "m3t5", name: "Namespaces e autoloading", level: "intermediário" },
			{ id: "m3t6", name: "Princípios SOLID", level: "intermediário" },
			{
				id: "m3t7",
				name: "Design Patterns — Singleton, Factory, Repository, Observer",
				level: "avançado",
			},
			{
				id: "m3t8",
				name: "Clean Code — nomenclatura, funções pequenas, DRY",
				level: "intermediário",
			},
			{
				id: "m3t9",
				name: "Dependency Injection e IoC Container",
				level: "avançado",
			},
		],
	},
	{
		id: "m4",
		title: "Banco de Dados",
		subtitle: "Dados são o coração",
		deadline: "Jul 2026",
		color: "#06b6d4",
		icon: "🗄️",
		topics: [
			{
				id: "m4t1",
				name: "MySQL — modelagem relacional, chaves primárias e estrangeiras",
				level: "básico",
			},
			{
				id: "m4t2",
				name: "SQL — SELECT, INSERT, UPDATE, DELETE, JOIN",
				level: "básico",
			},
			{
				id: "m4t3",
				name: "SQL avançado — subqueries, views, stored procedures",
				level: "intermediário",
			},
			{
				id: "m4t4",
				name: "Índices e otimização de queries",
				level: "intermediário",
			},
			{ id: "m4t5", name: "Transações e ACID", level: "intermediário" },
			{
				id: "m4t6",
				name: "Migrations e versionamento de banco",
				level: "intermediário",
			},
			{
				id: "m4t7",
				name: "Redis — cache, filas, sessões",
				level: "intermediário",
			},
			{
				id: "m4t8",
				name: "Elasticsearch básico (busca e indexação)",
				level: "avançado",
			},
			{
				id: "m4t9",
				name: "NoSQL — conceitos e quando usar",
				level: "intermediário",
			},
		],
	},
	{
		id: "m5",
		title: "Laravel — Fundamentos",
		subtitle: "O framework que abre portas",
		deadline: "Set 2026",
		color: "#ef4444",
		icon: "🔴",
		topics: [
			{
				id: "m5t1",
				name: "Instalação, estrutura de pastas e Artisan CLI",
				level: "básico",
			},
			{
				id: "m5t2",
				name: "Rotas — web.php, api.php, Route::group, middleware",
				level: "básico",
			},
			{
				id: "m5t3",
				name: "Controllers — Resource Controllers, Form Requests",
				level: "básico",
			},
			{
				id: "m5t4",
				name: "Blade — templates, layouts, componentes, diretivas",
				level: "básico",
			},
			{
				id: "m5t5",
				name: "Eloquent ORM — Models, relacionamentos (1:1, 1:N, N:N)",
				level: "intermediário",
			},
			{ id: "m5t6", name: "Migrations e Seeders", level: "básico" },
			{
				id: "m5t7",
				name: "Factories e Faker para dados de teste",
				level: "intermediário",
			},
			{
				id: "m5t8",
				name: "Validation — Form Requests, regras personalizadas",
				level: "intermediário",
			},
			{
				id: "m5t9",
				name: "Middleware — criação e uso no pipeline HTTP",
				level: "intermediário",
			},
			{
				id: "m5t10",
				name: "Service Providers e Service Container",
				level: "avançado",
			},
			{
				id: "m5t11",
				name: "Config, .env e variáveis de ambiente",
				level: "básico",
			},
			{
				id: "m5t12",
				name: "Storage — disco, S3, manipulação de arquivos",
				level: "intermediário",
			},
		],
	},
	{
		id: "m6",
		title: "Laravel — APIs & Autenticação",
		subtitle: "Construindo o back-end do mercado",
		deadline: "Out 2026",
		color: "#f97316",
		icon: "🔐",
		topics: [
			{
				id: "m6t1",
				name: "API RESTful com Laravel — recursos, status codes, responses",
				level: "intermediário",
			},
			{
				id: "m6t2",
				name: "API Resources e Transformers",
				level: "intermediário",
			},
			{
				id: "m6t3",
				name: "Laravel Sanctum — autenticação de SPA e mobile",
				level: "intermediário",
			},
			{ id: "m6t4", name: "Laravel Passport — OAuth2", level: "avançado" },
			{
				id: "m6t5",
				name: "Autenticação e Autorização — Gates, Policies",
				level: "intermediário",
			},
			{ id: "m6t6", name: "Queues e Jobs — Redis, Horizon", level: "avançado" },
			{
				id: "m6t7",
				name: "Events e Listeners — comunicação desacoplada",
				level: "avançado",
			},
			{
				id: "m6t8",
				name: "Notifications — email, Slack, database",
				level: "intermediário",
			},
			{
				id: "m6t9",
				name: "Task Scheduling — cron com Laravel",
				level: "intermediário",
			},
			{
				id: "m6t10",
				name: "Websockets com Laravel Echo e Pusher",
				level: "avançado",
			},
		],
	},
	{
		id: "m7",
		title: "Testes & Qualidade",
		subtitle: "Código confiável, carreira sólida",
		deadline: "Nov 2026",
		color: "#10b981",
		icon: "🧪",
		topics: [
			{
				id: "m7t1",
				name: "PHPUnit — testes unitários, assertions",
				level: "intermediário",
			},
			{
				id: "m7t2",
				name: "Feature Tests no Laravel — HTTP Tests",
				level: "intermediário",
			},
			{ id: "m7t3", name: "Mocking e Fakes no Laravel", level: "avançado" },
			{
				id: "m7t4",
				name: "TDD — Test Driven Development na prática",
				level: "avançado",
			},
			{
				id: "m7t5",
				name: "Code coverage e análise de qualidade",
				level: "avançado",
			},
			{
				id: "m7t6",
				name: "PHPStan / Larastan — análise estática",
				level: "intermediário",
			},
			{
				id: "m7t7",
				name: "PHP CS Fixer / Laravel Pint — padronização de código",
				level: "básico",
			},
		],
	},
	{
		id: "m8",
		title: "DevOps & Infraestrutura",
		subtitle: "Do código à produção",
		deadline: "Dez 2026",
		color: "#8b5cf6",
		icon: "⚙️",
		topics: [
			{
				id: "m8t1",
				name: "Docker — Dockerfile, docker-compose para ambiente dev",
				level: "intermediário",
			},
			{
				id: "m8t2",
				name: "Nginx/Apache — configuração básica para PHP",
				level: "intermediário",
			},
			{
				id: "m8t3",
				name: "CI/CD — GitHub Actions para testes automáticos",
				level: "intermediário",
			},
			{
				id: "m8t4",
				name: "AWS Basics — EC2, S3, RDS, ElastiCache",
				level: "intermediário",
			},
			{
				id: "m8t5",
				name: "Deploy de aplicação Laravel em produção",
				level: "intermediário",
			},
			{
				id: "m8t6",
				name: "Monitoramento — logs, New Relic / Datadog básico",
				level: "avançado",
			},
			{
				id: "m8t7",
				name: "Segurança web — OWASP Top 10, SQL Injection, XSS, CSRF",
				level: "intermediário",
			},
			{
				id: "m8t8",
				name: "Performance — cache de query, otimização de N+1, eager loading",
				level: "avançado",
			},
		],
	},
];

const LEVEL_COLORS = {
	básico: "#00ff88",
	intermediário: "#f59e0b",
	avançado: "#ef4444",
};
const LEVEL_BG = {
	básico: "rgba(0,255,136,0.08)",
	intermediário: "rgba(245,158,11,0.08)",
	avançado: "rgba(239,68,68,0.08)",
};

// ── Configuração automática via .env ─────────────────────────────────────────
const DB_CONFIG = {
	url: import.meta.env.VITE_SUPABASE_URL,
	key: import.meta.env.VITE_SUPABASE_KEY,
	userId: import.meta.env.VITE_USER_ID || "meu_progresso",
};

// ── Supabase REST helper ─────────────────────────────────────────────────────
function makeClient(url, key) {
	const h = {
		"Content-Type": "application/json",
		apikey: key,
		Authorization: `Bearer ${key}`,
	};
	const base = `${url}/rest/v1`;
	return {
		async save(userId, progress) {
			const r = await fetch(`${base}/roadmap_progress?on_conflict=user_id`, {
				method: "POST",
				headers: { ...h, Prefer: "resolution=merge-duplicates" },
				body: JSON.stringify({
					user_id: userId,
					progress,
					updated_at: new Date().toISOString(),
				}),
			});
			if (!r.ok) throw new Error(await r.text());
		},
		async load(userId) {
			const r = await fetch(
				`${base}/roadmap_progress?user_id=eq.${encodeURIComponent(userId)}&select=progress`,
				{ headers: h },
			);
			if (!r.ok) throw new Error(await r.text());
			const d = await r.json();
			return d[0]?.progress || {};
		},
	};
}

// ── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
	const [checked, setChecked] = useState({});
	const [expanded, setExpanded] = useState("m1");
	const [loaded, setLoaded] = useState(false);
	const [status, setStatus] = useState("idle"); // idle | saving | synced | error
	const clientRef = useRef(null);
	const timer = useRef(null);

	useEffect(() => {
		(async () => {
			// Inicializa cliente Supabase a partir do .env
			if (DB_CONFIG.url && DB_CONFIG.key) {
				clientRef.current = makeClient(DB_CONFIG.url, DB_CONFIG.key);
				try {
					const prog = await clientRef.current.load(DB_CONFIG.userId);
					setChecked(prog);
					setStatus("synced");
					setTimeout(() => setStatus("idle"), 2000);
				} catch (_) {
					// fallback para localStorage
					const saved = localStorage.getItem("progress");
					if (saved) setChecked(JSON.parse(saved));
					setStatus("error");
				}
			} else {
				// Sem Supabase configurado — usa só localStorage
				const saved = localStorage.getItem("progress");
				if (saved) setChecked(JSON.parse(saved));
			}
			setLoaded(true);
		})();
	}, []);

	const persist = useCallback(async (next) => {
		// Salva localmente sempre (fallback)
		localStorage.setItem("progress", JSON.stringify(next));
		// Salva no Supabase se configurado
		if (!clientRef.current) return;
		setStatus("saving");
		clearTimeout(timer.current);
		timer.current = setTimeout(async () => {
			try {
				await clientRef.current.save(DB_CONFIG.userId, next);
				setStatus("synced");
				setTimeout(() => setStatus("idle"), 2000);
			} catch (_) {
				setStatus("error");
			}
		}, 700);
	}, []);

	function toggle(id) {
		const next = { ...checked, [id]: !checked[id] };
		setChecked(next);
		persist(next);
	}

	function modProg(mod) {
		const done = mod.topics.filter((t) => checked[t.id]).length;
		return {
			done,
			total: mod.topics.length,
			pct: Math.round((done / mod.topics.length) * 100),
		};
	}

	const all = ROADMAP.flatMap((m) => m.topics);
	const totalDone = all.filter((t) => checked[t.id]).length;
	const totalPct = Math.round((totalDone / all.length) * 100);

	const statusUI = {
		idle: (
			<>
				<span style={{ color: "#2a2a3a" }}>●</span>
				{clientRef.current ? " supabase ativo" : " salvo localmente"}
			</>
		),
		saving: (
			<>
				<span
					style={{
						display: "inline-block",
						animation: "spin 1s linear infinite",
					}}>
					⟳
				</span>{" "}
				sincronizando...
			</>
		),
		synced: (
			<>
				<span style={{ color: "#00ff88" }}>✓</span> sincronizado
			</>
		),
		error: (
			<>
				<span style={{ color: "#ef4444" }}>✕</span> erro de conexão
			</>
		),
	}[status];

	if (!loaded)
		return (
			<div
				style={{
					minHeight: "100vh",
					background: "#080810",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					gap: 12,
				}}>
				<div
					style={{
						color: "#00ff88",
						fontSize: 28,
						animation: "spin 1s linear infinite",
					}}>
					⟳
				</div>
				<span
					style={{
						color: "#00ff88",
						fontFamily: "'Roboto Mono',monospace",
						fontSize: 13,
					}}>
					carregando progresso...
				</span>
			</div>
		);

	return (
		<div style={a.root}>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;800&family=Roboto+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#0a0a0f}
        ::-webkit-scrollbar-thumb{background:#1e1e2e;border-radius:4px}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,255,136,.35)}50%{box-shadow:0 0 0 5px rgba(0,255,136,0)}}
        @keyframes up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .pb{transition:width .7s cubic-bezier(.4,0,.2,1)}
        .row:hover{background:rgba(255,255,255,.025)!important}
        .sb-btn:hover{background:#00ff8818!important;color:#00ff88!important;border-color:#00ff8835!important}
        .dis-btn:hover{background:#ef444415!important;color:#ef4444!important;border-color:#ef444430!important}
        .mod-hdr{cursor:pointer;user-select:none}
        input:focus{outline:2px solid #00ff8830!important;border-color:#00ff8840!important}
      `}</style>

				{/* ── Header ── */}
			<header style={a.header}>
				<div style={a.hInner}>
					<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
						<div style={a.hIcon}>
							<span style={{ fontSize: 17 }}>🔴</span>
						</div>
						<div>
							<div style={a.hTitle}>Laravel Dev Roadmap</div>
							<div style={a.hSub}>{">"} meta: emprego back-end PHP · 2026</div>
						</div>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
						<span style={a.statusTxt}>{statusUI}</span>
						{clientRef.current && (
							<div style={a.dbBadge}>
								<span style={{ color: "#00ff88" }}>⚡</span> supabase{" "}
								<span style={{ color: "#333" }}>·</span>{" "}
								<span style={{ color: "#444" }}>{DB_CONFIG.userId}</span>
							</div>
						)}
					</div>
				</div>
			</header>

			{/* ── Hero ── */}
			<section
				style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px 16px" }}>
				<div
					style={{
						display: "flex",
						gap: 24,
						flexWrap: "wrap",
						alignItems: "flex-start",
					}}>
					<div style={{ flex: 1, minWidth: 200 }}>
						<div
							style={{
								fontSize: 10,
								letterSpacing: ".18em",
								color: "#00ff88",
								fontFamily: "'Roboto Mono',monospace",
								marginBottom: 4,
							}}>
							PROGRESSO GERAL
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "flex-end",
								gap: 2,
								lineHeight: 1,
							}}>
							<span
								style={{
									fontSize: 58,
									fontWeight: 800,
									color: "#fff",
									letterSpacing: "-.04em",
								}}>
								{totalPct}
							</span>
							<span
								style={{
									fontSize: 24,
									color: "#00ff88",
									fontWeight: 700,
									paddingBottom: 6,
								}}>
								%
							</span>
						</div>
						<div
							style={{
								fontSize: 12,
								color: "#3a3a4a",
								fontFamily: "'Roboto Mono',monospace",
								marginTop: 4,
								marginBottom: 10,
							}}>
							{totalDone} de {all.length} tópicos
						</div>
						<div
							style={{
								height: 3,
								background: "#111",
								borderRadius: 2,
								overflow: "hidden",
								maxWidth: 260,
							}}>
							<div
								className="pb"
								style={{
									height: "100%",
									borderRadius: 2,
									background: "linear-gradient(90deg,#00ff88,#06b6d4)",
									width: `${totalPct}%`,
								}}
							/>
						</div>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: 8,
							flex: 1,
							minWidth: 180,
						}}>
						{[
							["módulos", ROADMAP.length, "#00ff88"],
							["tópicos", all.length, "#06b6d4"],
							["feitos", totalDone, "#f59e0b"],
							["restantes", all.length - totalDone, "#ef4444"],
						].map(([l, v, c], idx) => (
							<div
								key={idx}
								style={{
									background: "#0c0c18",
									border: "1px solid #111",
									borderRadius: 10,
									padding: "10px 14px",
								}}>
								<div
									style={{
										fontSize: 26,
										fontWeight: 800,
										color: c,
										letterSpacing: "-.03em",
									}}>
									{v}
								</div>
								<div
									style={{
										fontSize: 10,
										color: "#00ff88",
										fontFamily: "'Roboto Mono',monospace",
										marginTop: 2,
									}}>
									{l}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Modules ── */}
			<main
				style={{ maxWidth: 900, margin: "0 auto", padding: "4px 24px 48px" }}>
				<div
					style={{
						display: "flex",
						gap: 14,
						marginBottom: 16,
						paddingLeft: 2,
					}}>
					{Object.entries(LEVEL_COLORS).map(([l, c]) => (
						<span
							key={l}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 5,
								fontSize: 11,
								fontFamily: "'Roboto Mono',monospace",
								color: c,
								opacity: 0.7,
							}}>
							<span
								style={{
									width: 6,
									height: 6,
									borderRadius: "50%",
									background: c,
									display: "inline-block",
								}}
							/>
							{l}
						</span>
					))}
				</div>

				{ROADMAP.map((mod, idx) => {
					const p = modProg(mod);
					const open = expanded === mod.id;
					return (
						<div
							key={mod.id}
							style={{
								...a.card,
								borderColor: open ? mod.color : "transparent",
								boxShadow: open
									? `0 0 20px ${mod.color}10,inset 0 0 0 1px ${mod.color}22`
									: "none",
								animation: `up .3s ease ${idx * 0.04}s both`,
							}}>
							<div
								className="mod-hdr"
								style={a.modHdr}
								onClick={() => setExpanded(open ? null : mod.id)}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: 12,
										flex: 1,
									}}>
									<span
										style={{
											fontSize: 11,
											fontFamily: "'Roboto Mono',monospace",
											fontWeight: 700,
											color: mod.color,
											minWidth: 22,
										}}>
										{p.pct === 100 ? "✓" : `0${idx + 1}`}
									</span>
									<span style={{ fontSize: 17 }}>{mod.icon}</span>
									<div>
										<div
											style={{
												fontSize: 14,
												fontWeight: 700,
												color: "#e8e8e8",
											}}>
											{mod.title}
										</div>
										<div
											style={{ fontSize: 11, color: "#00ff88", marginTop: 1 }}>
											{mod.subtitle}
										</div>
									</div>
								</div>
								<div style={{ display: "flex", alignItems: "center", gap: 14 }}>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "flex-end",
											gap: 1,
										}}>
										<span style={{ fontSize: 10, color: "#00ff88" }}>
											prazo
										</span>
										<span
											style={{
												fontSize: 12,
												color: mod.color,
												fontFamily: "'Roboto Mono',monospace",
											}}>
											{mod.deadline}
										</span>
									</div>
									<div
										style={{ display: "flex", alignItems: "center", gap: 8 }}>
										<div
											style={{
												width: 72,
												height: 3,
												background: "#1a1a28",
												borderRadius: 2,
												overflow: "hidden",
											}}>
											<div
												className="pb"
												style={{
													height: "100%",
													borderRadius: 2,
													background: mod.color,
													width: `${p.pct}%`,
													boxShadow:
														p.pct > 0 ? `0 0 6px ${mod.color}80` : "none",
												}}
											/>
										</div>
										<span
											style={{
												fontSize: 11,
												fontFamily: "'Roboto Mono',monospace",
												color: mod.color,
												minWidth: 28,
												textAlign: "right",
											}}>
											{p.done}/{p.total}
										</span>
									</div>
									<span
										style={{
											color: mod.color,
											fontSize: 13,
											transition: "transform .3s",
											transform: open ? "rotate(180deg)" : "rotate(0)",
											opacity: 0.7,
										}}>
										▾
									</span>
								</div>
							</div>

							{open && (
								<div style={{ padding: "0 20px 14px" }}>
									<div
										style={{
											borderTop: `1px solid ${mod.color}22`,
											marginBottom: 10,
										}}
									/>
									{mod.topics.map((t) => (
										<div
											key={t.id}
											className="row"
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												padding: "8px 10px",
												borderRadius: 8,
												cursor: "pointer",
												transition: "background .15s",
												gap: 10,
												background: checked[t.id]
													? `${mod.color}07`
													: "transparent",
												opacity: checked[t.id] ? 0.65 : 1,
											}}
											onClick={() => toggle(t.id)}>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: 10,
													flex: 1,
												}}>
												<div
													style={{
														width: 17,
														height: 17,
														borderRadius: 4,
														border: `1px solid ${checked[t.id] ? mod.color : "#2a2a3a"}`,
														background: checked[t.id]
															? mod.color
															: "transparent",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														flexShrink: 0,
														transition: "all .2s",
														animation: checked[t.id]
															? "pulse 2s ease infinite"
															: "none",
													}}>
													{checked[t.id] && (
														<span
															style={{
																color: "#000",
																fontSize: 9,
																fontWeight: 900,
															}}>
															✓
														</span>
													)}
												</div>
												<span
													style={{
														fontSize: 13,
														lineHeight: 1.4,
														color: checked[t.id] ? "#3a3a4a" : "#ccc",
														textDecoration: checked[t.id]
															? "line-through"
															: "none",
														transition: "color .2s",
													}}>
													{t.name}
												</span>
											</div>
											<span
												style={{
													fontSize: 10,
													padding: "2px 7px",
													borderRadius: 4,
													fontFamily: "'Roboto Mono',monospace",
													fontWeight: 700,
													color: LEVEL_COLORS[t.level],
													background: LEVEL_BG[t.level],
													border: `1px solid ${LEVEL_COLORS[t.level]}28`,
													flexShrink: 0,
												}}>
												{t.level}
											</span>
										</div>
									))}
								</div>
							)}
						</div>
					);
				})}

				<div
					style={{
						marginTop: 40,
						paddingTop: 16,
						borderTop: "1px solid #0e0e18",
						display: "flex",
						flexDirection: "column",
						gap: 5,
					}}>
					<div
						style={{
							fontSize: 11,
							color: "#2a2a3a",
							fontFamily: "'Roboto Mono',monospace",
						}}>
						<span style={{ color: "#00ff88" }}>{">"}</span> baseado nos
						requisitos de back-end PHP do Mercado Livre
					</div>
					<div
						style={{
							fontSize: 11,
							color: "#1e1e2e",
							fontFamily: "'Roboto Mono',monospace",
						}}>
						/{clientRef.current
							? `// sincronizando com supabase · id: ${DB_CONFIG.userId}`
							: "// sem supabase — usando localStorage"}
					</div>
				</div>
			</main>
		</div>
	);
}

const a = {
	root: {
		minHeight: "100vh",
		background: "#080810",
		color: "#e2e2e2",
		fontFamily: "'Roboto', sans-serif",
		fontWeight: 400,
	},
	header: {
		borderBottom: "1px solid #0e0e18",
		background: "#08080f",
		position: "sticky",
		top: 0,
		zIndex: 50,
	},
	hInner: {
		maxWidth: 900,
		margin: "0 auto",
		padding: "12px 24px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 12,
		flexWrap: "wrap",
	},
	hIcon: {
		width: 32,
		height: 32,
		borderRadius: 8,
		background: "#ef444415",
		border: "1px solid #ef444430",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	hTitle: {
		fontFamily: "'Roboto', sans-serif",
		fontWeight: 700,
		fontSize: 18,
		color: "#fff",
	},
	hSub: {
		fontSize: 11,
		color: "#2a2a3a",
		fontFamily: "'Roboto Mono', monospace",
		fontWeight: 400,
	},
	statusTxt: {
		fontSize: 12,
		color: "#3a3a4a",
		fontFamily: "'Roboto Mono', monospace",
		fontWeight: 400,
		display: "flex",
		alignItems: "center",
		gap: 5,
	},
	sbBtn: {
		fontSize: 13,
		fontWeight: 600,
		fontFamily: "'Roboto', sans-serif",
		padding: "7px 14px",
		background: "transparent",
		border: "1px solid #1e1e2e",
		borderRadius: 8,
		color: "#444",
		cursor: "pointer",
		transition: "all .2s",
	},
	dbBadge: {
		fontSize: 12,
		fontFamily: "'Roboto Mono', monospace",
		fontWeight: 400,
		padding: "5px 10px",
		background: "#00ff8808",
		border: "1px solid #00ff8820",
		borderRadius: 6,
		color: "#555",
		display: "flex",
		alignItems: "center",
		gap: 5,
	},
	disBtn: {
		fontSize: 12,
		fontFamily: "'Roboto', sans-serif",
		fontWeight: 500,
		padding: "5px 8px",
		background: "transparent",
		border: "1px solid #1e1e2e",
		borderRadius: 6,
		color: "#00ff88",
		cursor: "pointer",
		transition: "all .2s",
	},
	card: {
		border: "1px solid transparent",
		borderRadius: 14,
		background: "#0c0c18",
		marginBottom: 8,
		overflow: "hidden",
		transition: "border-color .3s,box-shadow .3s",
	},
	modHdr: {
		padding: "15px 20px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 12,
	},
};
